function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}
function showPosition(position) {
  var xhr = new XMLHttpRequest();
  console.log(position);
  xhr.open("GET", 'http://localhost:3000/test/' + position.coords.longitude + ";" + position.coords.latitude, true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    }
  }
  xhr.onload = function (result) {
    console.log(result);
  };

  xhr.send(null);
}
getLocation();