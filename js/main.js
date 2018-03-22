'use strict';

var images = ["images/credit-13.png","images/credit-1.png"];
var counter = 0;

var myImg = document.getElementById("myImg");
var buttonL = document.getElementById("buttonL");
var buttonR = document.getElementById("buttonR"); 

	buttonL.onclick = () =>{
		if( counter === 0) {
			counter = images.length - 1;
			myImg.setAttribute("src", images[counter]);
		} else {
		counter -= 1;
		myImg.setAttribute("src", images[counter]);
		}
	};


	buttonR.onclick = () =>{
		if (counter >= images.length - 1) {
			counter = 0;
			myImg.setAttribute("src", images[counter]);
		} else {
		counter += 1;
		myImg.setAttribute("src", images[counter]);
		}
	};
