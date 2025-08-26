$(function() {
  deadlineByConf = {};

  
  // IEEE FOCS 2026
  
  var rawDeadlines = ["2026-05-04 19:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-focs2026-theory-cnf-coreas-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-focs2026-theory-cnf-coreas-exp-0').addClass('past');
      }
      $('#ieee-focs2026-theory-cnf-coreas-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-focs2026-theory-cnf-coreas-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FC 2026
  
  var rawDeadlines = ["2025-09-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#fc2026-pract-cnf-sok-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#fc2026-pract-cnf-sok-corea-0').addClass('past');
      }
      $('#fc2026-pract-cnf-sok-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["fc2026-pract-cnf-sok-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACISP 2026
  
  var rawDeadlines = ["2025-11-06 23:59","2026-02-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acisp2026-pract-applied-cnf-coreb-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acisp2026-pract-applied-cnf-coreb-exp-0').addClass('past');
      }
      $('#acisp2026-pract-applied-cnf-coreb-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acisp2026-pract-applied-cnf-coreb-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acisp2026-pract-applied-cnf-coreb-exp-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acisp2026-pract-applied-cnf-coreb-exp-1').addClass('past');
      }
      $('#acisp2026-pract-applied-cnf-coreb-exp-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acisp2026-pract-applied-cnf-coreb-exp-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AfricaCrypt 2025
  
  var rawDeadlines = ["2025-03-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#africacrypt2025-theory-pract-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#africacrypt2025-theory-pract-cnf-coreo-0').addClass('past');
      }
      $('#africacrypt2025-theory-pract-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["africacrypt2025-theory-pract-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM CCSW 2025
  
  var rawDeadlines = ["2025-07-08 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-ccsw2025-pract-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-ccsw2025-pract-wk-0').addClass('past');
      }
      $('#acm-ccsw2025-pract-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-ccsw2025-pract-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM ASIACCS 2026
  
  var rawDeadlines = ["2026-03-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-asiaccs2026-pract-ps-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-asiaccs2026-pract-ps-expcfp-0').addClass('past');
      }
      $('#acm-asiaccs2026-pract-ps-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-asiaccs2026-pract-ps-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AAAI 2025
  
  var rawDeadlines = ["2025-08-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#aaai2025-pract-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#aaai2025-pract-cnf-ppml-coreas-0').addClass('past');
      }
      $('#aaai2025-pract-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["aaai2025-pract-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AsianHOST 2025
  
  var rawDeadlines = ["2025-07-28 14:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#asianhost2025-hw-applied-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#asianhost2025-hw-applied-cnf-coreo-0').addClass('past');
      }
      $('#asianhost2025-hw-applied-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["asianhost2025-hw-applied-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Cybersecurity Artifacts Competition and Impact Award 2025
  
  var rawDeadlines = ["2025-09-17 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0').addClass('past');
      }
      $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cybersecurity-artifacts-competition-and-impact-award2025-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM ToQC 2025
  
  var rawDeadlines = ["%y-10-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-toqc2025-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-toqc2025-pract-applied-jrn-0').addClass('past');
      }
      $('#acm-toqc2025-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-toqc2025-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  

  // Reorder list
  var today = moment();
  var confs = $('.conf').detach();
  
  confs.sort(function(a, b) {
    var aDeadline = deadlineByConf[a.id];
    var bDeadline = deadlineByConf[b.id];
    var aDiff = today.diff(aDeadline);
    var bDiff = today.diff(bDeadline);
    if (aDiff < 0 && bDiff > 0) {
      return -1;
    }
    if (aDiff > 0 && bDiff < 0) {
      return 1;
    }
    return bDiff - aDiff;
  });
  
  var pastConfs = []; 
  var upcomingConfs = []; 
   
  confs.each(function() {
    var conf = $(this);

    if (conf.hasClass("past")) {
      pastConfs.push(conf);
    } else {
      upcomingConfs.push(conf);
    }
  }); 
   
  //$('.conf-container').append(confs); 
  $('.conf-container').append(upcomingConfs); 
  $('#past-events-list').append(pastConfs);  
   
  // Toggle past events visibility
  $(".past-deadlines").click(function() {
    $("#past-events-list").slideToggle();
    $(".glyphicon", this).toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
  });
   
  $(document).ready(function () {
    $(".conf").each(function () {
        let conf = $(this);
        let confTitle = conf.find(".conf-title");
        let confComment = conf.find(".conf-comment");

        const tagMappings = {
            "EXP": () => {
                confTitle.text(confTitle.text() + " (Expected)");
                conf.find(".conf-date").html('<i class="fas fa-calendar-day"></i> TBA');
                conf.find(".conf-place").html('<i class="fas fa-map-marker-alt"></i> TBA');
                conf.find(".conf-rebut").text("TBA");
                confComment.text("CFP yet to be announced");
            },
            "EXPCFP": () => {
                confTitle.text(confTitle.text() + " (Expected)");
                confComment.text("CFP yet to be announced");
            },
            "JRN": () => {
                confTitle.text("(Journal) " + confTitle.text());
                let portalLink = conf.data("portal") || confTitle.attr("href");
                let newComment = (confComment.text().trim() ? confComment.text().trim() + " " : "") +
                                 `<a href="${portalLink}" target="_blank">Submission Portal</a>`;
                confComment.html(newComment);
            },
            "WK": () => {
                confTitle.text("(Workshop) " + confTitle.text());

                let conferenceText = conf.find(".conference").text().trim();
                if (conferenceText) {
                    let existingComment = confComment.text().trim();
                    let newComment = existingComment ? existingComment + " | Co-located with " + conferenceText : "Co-located with " + conferenceText;
                    confComment.text(newComment);
                }
            },
            "PS": () => confTitle.text("(Poster) " + confTitle.text()),
            "MISC": () => confTitle.text("(Misc.) " + confTitle.text()),
            "CRS": () => confTitle.text("(School) " + confTitle.text())
        };

        Object.keys(tagMappings).forEach(tag => {
            if (conf.hasClass(tag)) {
                tagMappings[tag]();
            }
        });
    });
  });


  // Set checkboxes
  // Read filter data from Jekyll
  var filter1 = [{"name":"Theory","tag":"THEORY"},{"name":"Practical","tag":"PRACT"},{"name":"Applied","tag":"APPLIED"},{"name":"Machine Learning","tag":"PPML"},{"name":"Hardware","tag":"HW"},{"name":"SoKs","tag":"SOK"}];
  var filter2 = [{"name":"Conferences","tag":"CNF"},{"name":"Journals","tag":"JRN"},{"name":"Workshops","tag":"WK"},{"name":"Posters","tag":"PS"},{"name":"Crypto Schools","tag":"CRS"},{"name":"Miscellaneous","tag":"MISC"}];
  var filter3 = [{"name":"A*","tag":"COREAS"},{"name":"A","tag":"COREA"},{"name":"B","tag":"COREB"},{"name":"C","tag":"COREC"},{"name":"National","tag":"COREN"},{"name":"Unranked","tag":"COREU"},{"name":"Not classified","tag":"COREO"}];

  // Combine all filters into a single array
  var all_tags = [];
  var toggle_status = {};

  function processFilters(filters) {
    for (var i = 0; i < filters.length; i++) {
      all_tags.push(filters[i]['tag']);
      toggle_status[filters[i]['tag']] = false;
    }
  }

  processFilters(filter1);
  processFilters(filter2);
  processFilters(filter3);

  // Retrieve stored preferences
  var tags = store.get('gzquse.github.io');
  if (tags === undefined) {
    tags = []; // Default to all unchecked
  }

  // Apply stored preferences to checkboxes
  for (var i = 0; i < all_tags.length; i++) {
      var tag = all_tags[i];
      var isChecked = tags.includes(tag); // Check if the tag is stored
      $('#' + tag + '-checkbox').prop('checked', isChecked);
      toggle_status[tag] = isChecked;
  }

  // Save updated selection to local storage
  store.set('gzquse.github.io', tags);

   
   
  // Track selected filters
  let selectedFilters = {
    filter1: new Set(),
    filter2: new Set(),
    filter3: new Set()
  };

  function updateConfList() {
    $(".conf").each(function () {
      let conf = $(this);
      let show = true;

      // Check each filter group
      Object.keys(selectedFilters).forEach(filterGroup => {
        if (selectedFilters[filterGroup].size > 0) {
          let hasTag = false;
          selectedFilters[filterGroup].forEach(tag => {
            if (conf.hasClass(tag)) {
              hasTag = true;
            }
          });
          if (!hasTag) {
            show = false;
          }
        }
      });

      // Show or hide based on filter matching
      if (show) {
        conf.show();
      } else {
        conf.hide();
      }
    });
  }

  // Handle checkbox changes
  $(".filter-checkbox").change(function () {
    let tag = $(this).attr("id").replace("-checkbox", "");
    let filterGroup = $(this).data("filter-group");

    if ($(this).is(":checked")) {
      selectedFilters[filterGroup].add(tag);
    } else {
      selectedFilters[filterGroup].delete(tag);
    }

    updateConfList();
  });

  // Handle "Clear Filters" button click
  $("#clear-filters").click(function () {
    // Uncheck all checkboxes
    $(".filter-checkbox").prop("checked", false);

    // Reset the selected filters
    selectedFilters = {
      filter1: new Set(),
      filter2: new Set(),
      filter3: new Set()
    };

    updateConfList();
  });

  updateConfList(); // Initial display
});
