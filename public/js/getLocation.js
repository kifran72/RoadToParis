
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
console.log('Geolocation is not supported by this browser.');
}

function showPosition(position) {
    const req = new XMLHttpRequest();
    let position = {
        x: position.longitude,
        y: position.latitude
      }

    req.open("POST", "/");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({x: position.x, y: position.y}));
}


