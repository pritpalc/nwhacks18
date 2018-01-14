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

var subID = ["sub1", "sub2", "sub3", "sub4", "sub5"];
var cnumID = ["cnum1", "cnum2", "cnum3", "cnum4", "cnum5"];

function changeSubject() {
  for(var i = 0; i < subID.length; i++) {
    var element = document.getElementById(subID[i]);
    var temp = element.options[element.selectedIndex].text;
    subjects[i] = temp;
    console.log(temp);
    if (subjects[i] === " ") {
      courseNums[i] = " ";
      // REFRESH COURSE TO NULL
      // document.getElementById(cnumID[i]).selectedIndex = 0;
    }
  }
  console.log(subjects);
  for(var i = 0; i < PREVSOMETHING; i++) {
    var parentElement = document.getElementById("SOMETHING"); // THE COURSE NUM SELECT ELEMENT
    var child = document.getElementById("SOMETHING"); // THE ID THAT HAS ALREADY BEEN SET
    parentElement.removeChild(child);
  }

  for(var i = 0; i < SOMETHING; i++) {  // THE NUMBER OF COURSES FOR THE SUBJECT
    var parentElement = document.createElement("option");
    var value = document.createTextNode("");  // THE COURSE NUMBER
    parentElement.appendChild(value);
    var wrapper = document.getElementById("SOMETHING"); // THE COURSE NUM SELECT ELEMENT
    wrapper.appendChild(parentElement);
  }
}

function changeCourseNum() {
  for(var i = 0; i < cnumID.length; i++) {
    var element = document.getElementById(cnumID[i]);
    var temp = element.options[element.selectedIndex].text;
    courseNums[i] = temp;
    console.log(temp);
  }
  console.log(courseNums);
}

function scheduleForm() {
  for (var i = 0; i < subID.length; i++) {
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
