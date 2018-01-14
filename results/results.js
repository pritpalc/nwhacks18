function initMap() {
  var ubc = {lat: 49.26324, lng: -123.250401};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ubc
  });
  // LOOP THROUGH AND CREATE MARKERS
  var marker = new google.maps.Marker({
    position: ubc,
    map: map
  });
}

function createSideBar() {
  i = 1;
  for(schedule in schedules) {
    var parent = document.createElement("div");
    parentElement.classList.add("row");
    var childElement = document.createElement("div");
    child.classList.add("col");
    var text = document.createTextNode("Option " + i + "Start: " + START + " End: " + END);
    childElement.appendChild(text);
    parentElement.appendChild(child);
    i++;
  }
}

function createCalendar() {
  for(section in sections) {
  }
} 
