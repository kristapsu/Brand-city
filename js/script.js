
var imageArray = new Array(); // leave as is.

// Specify number of milliseconds between image switches.
var switchMilliseconds = 10000;

// Specify the id of the div or other HTML tag with the 
//   background image to switch.

var divID = 'slideshow';

// To add more images, continue the pattern below.

imageArray[0] = 'img/header-background-1.png';
imageArray[1] = 'img/header-background-2.png';
imageArray[2] = 'img/header-background-3.png';

// No further customization needed in this JavaScript

function publishPicture(i) {
document.getElementById(divID).style.background = 'url("'+imageArray[i]+'")';
i++;
if( i > (imageArray.length - 1) ) { i = 0; }
setTimeout('publishPicture('+i+')',switchMilliseconds);
}
publishPicture(0);