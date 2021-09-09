var can = document.getElementById('cStyle');


let cantx = can.getContext("2d");


cantx.lineWidth = 3;

// cantx.strokeStyle = "black";
// cantx.strokeRect(10, 10, 380, 280);

cantx.fillStyle = "green";

cantx.fillRect(0, 0, 376, 276);

var centerX = can.width / 2;
var centerY = can.height / 2;

cantx.beginPath();
cantx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
cantx.fillStyle = 'red';
cantx.fill();

