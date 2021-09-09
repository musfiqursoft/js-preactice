
var heading = document.createElement("h1")
var h = document.createTextNode("this is a heading create in javascript1");

heading.appendChild(h);
var text = document.getElementById('my-div');

text.appendChild(heading);


var remove = document.getElementsByTagName('h4')[0];
text.removeChild(remove);


var heading1 = document.createElement("h1")
var h1 = document.createTextNode("this is a heading create in javascript 2");

heading1.appendChild(h1);

var h3 = document.getElementsByTagName('h3')[0];

text.insertBefore(heading1, h3);
