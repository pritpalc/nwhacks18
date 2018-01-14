var university = null;
var subjects = [" ", " ", " ", " ", " "];
var courseNums = [" ", " ", " ", " ", " "];

function updateUni() {
  var element = document.getElementById("uni");
  university = element.options[element.selectedIndex].text;
  console.log(university);
}

function changeSubject(ele) {
  var element = document.getElementById(ele.id);
  console.log(ele.id.substring(3,4));
  var temp = element.options[element.selectedIndex].text;
  subjects[parseInt(ele.id.substring(3,4)-1)] = temp;
  console.log(temp);
  if (subjects[parseInt(ele.id.substring(3,4)-1)] === " ") {
    courseNums[parseInt(ele.id.substring(3,4)-1)] = " ";
    // REFRESH COURSE TO NULL
  }
  console.log(subjects);

  switch (ele.id.substring(3,4)) {
    case "1":
      updateCourses("cnum1");
      break;
    case "2":
      updateCourses("cnum2");
      break;
    case "3":
      updateCourses("cnum3");
      break;
    case "4":
      updateCourses("cnum4");
      break;
    case "5":
      updateCourses("cnum5");
      break;
    default:
      break;
  }
}

var temp1 = ["101", "102", "103"];
var temp2 = ["101", "102", "108"];
var temp3 = ["101", "105", "107"];

function updateCourses(id) {
  var tempNew = [];
  var subject = null;
  if (id.substring(4,5) === "1") {
    subject = subjects[0];
  } else if (id.substring(4,5) === "2") {
    subject = subjects[1];
  } else if (id.substring(4,5) === "3") {
    subject = subjects[2];
  } else if (id.substring(4,5) === "4") {
    subject = subjects[3];
  } else {
    subject = subjects[4];
  }

  if(subject === "STAT") {
    tempNew = temp1;
  } else if (subject === "MATH") {
    tempNew = temp2;
  } else {
    tempNew = temp3;
  }

  for(var i = 0; i < 3; i++) {
    var parentElement = document.createElement("option");
    var value = document.createTextNode(tempNew[i]);
    value.id = (id + i.toString());
    parentElement.appendChild(value);
    var wrapper = document.getElementById(id);
    wrapper.appendChild(parentElement);
  }

  var children = document.getElementById(id).childNodes;
  console.log(children);
  for(var i = 1; i < 4; i++) {
    document.getElementById(id).removeChild(children[i]);
  }
}

function changeCourseNum(ele) {
  var element = document.getElementById(ele.id);
  console.log(ele.id.substring(4,5));
  var temp = element.options[element.selectedIndex].text;
  courseNums[parseInt(ele.id.substring(4,5)-1)] = temp;
  console.log(temp);
  console.log(courseNums);
}

function scheduleForm() {
  for (var i = 0; i < subjects.length; i++) {
    if (subjects[i] === " " && courseNums[i] != " " ||
        subjects[i] != " " && courseNums[i] === " ") {
      console.log(subjects);
      console.log(courseNums);
      document.getElementById("error-msg").setAttribute("style", "display: block;");
      break;
    } else {
      document.getElementById("error-msg").setAttribute("style", "display: none;");
      // NEEDS TO BE FIXED
    }
  }
}

var statCourses = [ [add("101", "300", "MWF", "9", "10"), add("101", "301", "TT", "14", "15"), add("101", "302", "MWF", "11", "12")],
                    [add("102", "300", "TT", "17", "18"), add("102", "301", "TT", "8", "10"), add("102", "302", "MWF", "1330", "15")],
                    [add("103", "300", "MWF", "13", "14"), add("103", "301", "MWF", "830", "10"), add("103", "302", "MWF", "930", "10")]
                  ]
var mathCourses = [ [add("101", "300", "MWF", "9", "10"), add("101", "301", "TT", "14", "15"), add("101", "302", "MWF", "11", "12")],
                    [add("102", "300", "TT", "17", "18"), add("102", "301", "TT", "8", "10"), add("102", "302", "MWF", "1330", "15")],
                    [add("108", "300", "MWF", "13", "14"), add("108", "301", "MWF", "830", "10"), add("108", "302", "MWF", "930", "10")]
                  ]
var cpscCourses = [ [add("101", "300", "MWF", "9", "10"), add("101", "301", "TT", "14", "15"), add("101", "302", "MWF", "11", "12")],
                    [add("105", "300", "TT", "17", "18"), add("105", "301", "TT", "8", "10"), add("105", "302", "MWF", "1330", "15")],
                    [add("107", "300", "MWF", "13", "14"), add("107", "301", "MWF", "830", "10"), add("107", "302", "MWF", "930", "10")]
                  ]
var fiveCourses = [];

function createTheInputs() {
  for(subject in subjects) {
    var temporary = [];
    for(course in courseNums) {
      if(subject === "STAT") {
        if (course === "101") {
          fiveCourses.push(statCourses[0]);
          fiveCourses.push(statCourses[1]);
          fiveCourses.push(statCourses[2]);
        }
        if (course === "102") {
          fiveCourses.push(statCourses[3]);
          fiveCourses.push(statCourses[4]);
          fiveCourses.push(statCourses[5]);
        }
        if (course === "103") {
          fiveCourses.push(statCourses[6]);
          fiveCourses.push(statCourses[7]);
          fiveCourses.push(statCourses[8]);
        }
      } else if (subject === "MATH") {
        if (course === "101") {
          fiveCourses.push(statCourses[0]);
          fiveCourses.push(statCourses[1]);
          fiveCourses.push(statCourses[2]);
        }
        if (course === "102") {
          fiveCourses.push(statCourses[3]);
          fiveCourses.push(statCourses[4]);
          fiveCourses.push(statCourses[5]);
        }
        if (course === "108") {
          fiveCourses.push(statCourses[6]);
          fiveCourses.push(statCourses[7]);
          fiveCourses.push(statCourses[8]);
        }
      } else {
        if (course === "101") {
          fiveCourses.push(statCourses[0]);
          fiveCourses.push(statCourses[1]);
          fiveCourses.push(statCourses[2]);
        }
        if (course === "105") {
          fiveCourses.push(statCourses[3]);
          fiveCourses.push(statCourses[4]);
          fiveCourses.push(statCourses[5]);
        }
        if (course === "107") {
          fiveCourses.push(statCourses[6]);
          fiveCourses.push(statCourses[7]);
          fiveCourses.push(statCourses[8]);
        }
      }
    }
  }
}

function createSchedule() {
  createTheInputs();
  var finalSchedules = [];
  var curSchedule = [];
  for(a in fiveCourses) {
    curSchedule = addToSchedule(a, curSchedule);
    for(b in fiveCourses) {
      if (!(clashes(a, b))) {
        curSchedule = addToSchedule(b, curSchedule);
      }
      for(c in fiveCourses) {
        if (!(clashes(a, c) || clashes(b, c))) {
          curSchedule = addToSchedule(c, curSchedule);
        }
        for(d in fiveCourses) {
          if (!(clashes(a, d) || clashes(b, d) || clashes(c, d))) {
            curSchedule = addToSchedule(d, curSchedule);
          }
          for(e in fiveCourses) {
            if (!(clashes(a, e) || clashes(b, e) || clashes(c, e) || clashes(d, e))) {
              curSchedule = addToSchedule(e, curSchedule);
              finalSchedules.push(curSchedule);
              curSchedule = [];
            }
          }
        }
      }
    }
  }
  return finalSchedules;
}

function add(num, sect, daysInput, startInput, finishInput) {
  var newCourse = {
    courseNum: num,
    sectionNum: sect,
    days: daysInput,
    start: startInput,
    finish: finishInput
  };
}

function addToSchedule(course, schedule) {
  schedule.push(course);
  return schedule;
}

function clashes(ele1, ele2) {
  if ( (ele1.start >= ele2.finish || ele1.finish <= ele2.start) && ele1.days != ele2.days) {
    return false;
  }
  return true;
}
