function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function showPosition(position) {
//   ('/', function() {
//     const position = {
//       x: position.longitude,
//       y: position.latitude,
//       timestamp: position.timestamp,
//     };
//     return position;
//   });
  console.log(position);
}

getLocation();
