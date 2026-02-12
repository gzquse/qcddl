# 🚀 Quantum Computing Deadline

Welcome to the **Quantum Computing Hub**, your one-stop destination for keeping track of the latest deadlines for top qc conferences, journals, and workshops! 📅✨

## 🚀 Adding/updating a conference

Want to contribute? Awesome! Here’s how:

* Read the data format description below. **Note that the timezone format sign is inverted** (e.g., UTC+7 is written as `Etc/GMT-7`). It's [not a bug][0]. Yeah, we know—it’s weird. If you have a better JavaScript timezone library in mind, hit us up! 😅
* Update `_data/conferences.yml`. You can do this directly on GitHub or locally after forking the repo.
* Send a pull request. 🎉

### ✅ Is my entry in scope?

The record is meant to host academic conferences, journals, workshops, and related event deadlines limit and only to quantum computing.

### 🔍 Field descriptions

| Field name    | Description                                                 |
|--------------|-------------------------------------------------------------|
| `name`*      | Short conference name (no year)                              |
| `description` | Long name or a brief description                           |
| `year`*      | Year the conference is happening                            |
| `link`*      | URL to the conference homepage                              |
| `abdeadline`  | Registration and/or abstract deadline.                     |
| `deadline`*  | Submission deadline(s)                                      |
| `rebut`      | Rebuttal window                                            |
| `timezone`    | Timezone in [tz][1] format (Default: UTC-12, [AoE][2])     |
| `date`        | When the conference is happening                           |
| `place`       | Conference location                                        |
| `tags`        | One or more tags as detailed below.                        |

📌 **Please try to maintain consistency in the order of the fields when updating an entry.**

### 🏷️ Tags - Shortlisting Made Easy! 🚀

We use three sets of tags that act as filters to help you quickly find relevant entries. 

- **First filter**: Research Domain (e.g., THEORY, PRACT, APPLIED, etc.)
- **Second filter**: Publication Type (e.g., CNF, JRN, WK, PS, etc.)
- **Third filter**: [CORE](https://portal.core.edu.au/conf-ranks/) Ranking (e.g., COREAS, COREA, COREB, etc.)

For the full list of tags, check out [`/_data/filters.yml`](https://github.com/mpc-deadlines/mpc-deadlines.github.io/blob/main/_data/filters.yml). 🏷️

## Automated Updates

A weekly GitHub Actions workflow fetches latest deadlines from IEEE QCE, SC, and [csconfs](https://github.com/dynaroars/csconfs). Run locally:

```bash
pip install -r scripts/requirements.txt
python scripts/update_deadlines.py --check    # Validate conferences.yml
python scripts/update_deadlines.py --report   # Fetch and report suggested updates
```

## Dev 
```
brew install rbenv ruby-build && \
rbenv install 3.3.0 && \
rbenv global 3.3.0 && \
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc && \
source ~/.zshrc && \
ruby -v && \
gem install jekyll bundler
bundle install
bundle exec jekyll serve
Serve it at http://127.0.0.1:4000
```
## 🙏 Acknowledgements

Thanks to the amazing **[mpc-deadlines](https://mpc-deadlines.github.io/)** page, which inspired the initial version of this hub. 🙌
We refer additional information in [document](https://github.com/mpc-deadlines/mpc-deadlines.github.io). 