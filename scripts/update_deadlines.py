#!/usr/bin/env python3
"""
Quantum Computing Deadlines Updater

Fetches deadline data from:
- IEEE QCE (Quantum Week)
- SC (Supercomputing)
- csconfs (dynaroars/csconfs - CSRankings conference data)
- Custom quantum-focused sources

Run: python scripts/update_deadlines.py [--check|--report|--apply]
  --check: Validate existing conferences.yml
  --report: Fetch and output suggested updates (default)
  --apply: Fetch and apply updates to conferences.yml (with backup)
"""

import argparse
import re
import sys
from datetime import datetime
from pathlib import Path

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Install: pip install requests beautifulsoup4 pyyaml")
    sys.exit(1)

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
CONF_FILE = REPO_ROOT / "_data" / "conferences.yml"
CSCONFS_URL = "https://raw.githubusercontent.com/dynaroars/csconfs/main/public/data/conferences.yaml"

# Quantum-relevant conference name patterns (for filtering csconfs)
QC_KEYWORDS = [
    "quantum", "QCE", "QIML", "HAIQ", "QuNet", "Q-SE", "PLANQC",
    "Qdata", "ACM-QSEC",
]

# CCF Class A / CSRankings venues with quantum tracks (from research report)
CCF_QC_VENUES = [
    "SC", "ISCA", "MICRO", "HPCA", "ASPLOS", "DAC",
    "PLDI", "POPL", "ICSE", "FOCS", "STOC", "SODA",
    "NeurIPS", "ICML", "AAAI", "IJCAI",
    "SIGCOMM", "CCS", "USENIX", "IEEE S&P",
    "SIGMOD", "VLDB",
]


def load_conferences() -> list[dict]:
    """Load existing conferences.yml"""
    with open(CONF_FILE, encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data or []


def save_conferences(confs: list[dict]) -> None:
    """Save conferences.yml"""
    with open(CONF_FILE, "w", encoding="utf-8") as f:
        yaml.dump(confs, f, default_flow_style=False, allow_unicode=True, sort_keys=False)


def fetch_url(url: str, timeout: int = 15) -> str | None:
    """Fetch URL content. Returns None on failure."""
    try:
        r = requests.get(url, timeout=timeout)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  Fetch failed: {e}", file=sys.stderr)
        return None


def fetch_qce_deadlines(year: int) -> dict | None:
    """Fetch QCE (IEEE Quantum Week) deadlines."""
    url = f"https://qce.quantum.ieee.org/{year}/key-deadlines/"
    html = fetch_url(url)
    if not html:
        return None
    soup = BeautifulSoup(html, "html.parser")
    deadlines = {}
    # Look for date patterns like "April 13, 2026"
    for text in soup.stripped_strings:
        match = re.search(r"(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})", text, re.I)
        if match:
            month, day, yr = match.groups()
            try:
                dt = datetime.strptime(f"{month} {day} {yr}", "%B %d %Y")
                key = text[:60] if "technical" in text.lower() or "paper" in text.lower() else None
                if "Technical Paper" in text or "Paper Submission" in text:
                    deadlines["main"] = dt.strftime("%Y-%m-%d 23:59")
            except ValueError:
                pass
    return deadlines.get("main")


def fetch_sc_deadlines(year: int) -> dict | None:
    """Fetch SC (Supercomputing) deadlines."""
    url = f"https://sc{str(year)[-2:]}.supercomputing.org/all-dates-deadlines/"
    html = fetch_url(url)
    if not html:
        return None
    # SC typically lists "8 APR" for papers
    match = re.search(r"(\d{1,2})\s+(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\s+(\d{4})", html, re.I)
    if match:
        day, month, yr = match.groups()
        months = {"JAN":1,"FEB":2,"MAR":3,"APR":4,"MAY":5,"JUN":6,"JUL":7,"AUG":8,"SEP":9,"OCT":10,"NOV":11,"DEC":12}
        m = months.get(month.upper(), 1)
        return f"{yr}-{m:02d}-{int(day):02d} 23:59"
    return None


def fetch_csconfs() -> list[dict] | None:
    """Fetch csconfs conference data."""
    text = fetch_url(CSCONFS_URL)
    if not text:
        return None
    try:
        data = yaml.safe_load(text)
        return data if isinstance(data, list) else []
    except yaml.YAMLError:
        return None


def is_quantum_relevant(conf: dict) -> bool:
    """Check if conference is quantum-relevant."""
    name = (conf.get("name") or "").upper()
    desc = (conf.get("description") or "").lower()
    for kw in QC_KEYWORDS:
        if kw.upper() in name or kw.lower() in desc:
            return True
    return name in [v.upper() for v in CCF_QC_VENUES]


def convert_csconf_to_qcddl(entry: dict) -> dict:
    """Convert csconfs format to qcddl format."""
    deadline = entry.get("deadline")
    if not deadline:
        return None
    if isinstance(deadline, str) and len(deadline) == 10:  # YYYY-MM-DD
        deadline = [f"{deadline} 23:59"]
    elif isinstance(deadline, str):
        deadline = [deadline]
    return {
        "name": entry.get("name"),
        "description": entry.get("description", ""),
        "year": entry.get("year"),
        "link": entry.get("link", ""),
        "deadline": deadline,
        "date": entry.get("date"),
        "place": entry.get("place"),
        "abdeadline": entry.get("abstract_deadline"),
        "comment": entry.get("note") or "",
        "tags": ["PRACT", "CNF"],
    }


def validate_conferences(confs: list[dict]) -> list[str]:
    """Validate conference entries. Returns list of issues."""
    issues = []
    required = {"name", "year", "link", "deadline", "tags"}
    for i, c in enumerate(confs):
        for field in required:
            if field not in c or c[field] is None:
                issues.append(f"Entry {i} ({c.get('name','?')}): missing {field}")
        dl = c.get("deadline")
        if isinstance(dl, list) and dl and dl[0] != "TBA":
            for d in dl:
                if not re.match(r"^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}$", str(d)) and "%" not in str(d):
                    if d != "TBA":
                        issues.append(f"Entry {i} ({c.get('name')}): invalid deadline format '{d}'")
    return issues


def main():
    parser = argparse.ArgumentParser(description="Update quantum computing deadlines")
    parser.add_argument("--check", action="store_true", help="Validate conferences.yml")
    parser.add_argument("--report", action="store_true", help="Fetch and report suggested updates")
    parser.add_argument("--apply", action="store_true", help="Apply updates (backup first)")
    args = parser.parse_args()

    if args.check:
        confs = load_conferences()
        issues = validate_conferences(confs)
        if issues:
            for i in issues:
                print(i)
            sys.exit(1)
        print("Validation OK")
        return

    # Default: report mode
    report = []
    print("Fetching deadline sources...")

    # QCE
    for yr in [2026, 2027]:
        dl = fetch_qce_deadlines(yr)
        if dl:
            report.append(f"QCE {yr}: suggested deadline {dl}")

    # SC
    for yr in [2026, 2027]:
        dl = fetch_sc_deadlines(yr)
        if dl:
            report.append(f"SC {yr}: suggested deadline {dl}")

    # csconfs - list quantum-relevant from recent years
    csconfs = fetch_csconfs()
    if csconfs:
        qc_conf_count = sum(1 for c in csconfs if is_quantum_relevant(c) and c.get("year", 0) >= 2025)
        report.append(f"csconfs: {qc_conf_count} quantum-relevant conferences (2025+)")

    print("\n".join(report) if report else "No updates fetched.")

    if args.apply:
        print("--apply: manual edits required. Run --report and update _data/conferences.yml via PR.")


if __name__ == "__main__":
    main()
