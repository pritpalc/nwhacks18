var university = null;
var session = null;
var subjects = [" ", " ", " ", " ", " "];
var courseNums = [" ", " ", " ", " ", " "];

function updateUni() {
  var element = document.getElementById("uni");
  university = element.options[element.selectedIndex].text;
  console.log(university);
}

/* function updateSesh() {
  var element = document.getElementById("sesh");
  session = element.options[element.selectedIndex].text;
  console.log(session);
} */

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

function updateCourses(id) {
  for(var i = 0; i < PREVSOMETHING; i++) {  // THE NUMBER OF COURSES FOR THE PREV SUBJECT --> FROM DATABASE
    var parentElement = document.getElementById(id);
    var child = document.getElementById(id + i);
    parentElement.removeChild(child);
  }
  for(var i = 0; i < SOMETHING; i++) {  // THE NUMBER OF COURSES FOR THE SUBJECT --> FROM DATABASE
    var parentElement = document.createElement("option");
    var value = document.createTextNode("SOMETHING");  // THE COURSE NUMBER --> FROM DATABASE
    parentElement.appendChild(value);
    value.id = id + i;
    var wrapper = document.getElementById(id);
    wrapper.appendChild(parentElement);
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

function createSchedule() {
  var finalSchedules = [];
  var curSchedule = [];
  for(a in courseOne) {
    curSchedule = add(a, courseOne, curSchedule);
    for(b in courseTwo) {
      if (!(clashes(a, b))) {
        curSchedule = add(b, courseTwo, curSchedule);
      }
      for(c in courseThree) {
        if (!(clashes(a, c) || clashes(b, c))) {
          curSchedule = add(c, courseThree, curSchedule);
        }
        for(d in courseFour) {
          if (!(clashes(a, d) || clashes(b, d) || clashes(c, d))) {
            curSchedule = add(d, courseFour, curSchedule);
          }
          for(e in courseFive) {
            if (!(clashes(a, e) || clashes(b, e) || clashes(c, e) || clashes(d, e))) {
              curSchedule = add(e, courseFive, curSchedule);
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

function add(sect, course, schedule) {
  var newCourse = {
    courseNum: ,
    sectionNum: ,
    days: ,
    start: ,
    finish:
  };
  schedule.push(newCourse);
  return schedule;
}

function clashes(ele1, ele2) {
  if (ele1.start >= ele2.finish || ele1.finish <= ele2.start) {
    return false;
  }
  return true;
}
