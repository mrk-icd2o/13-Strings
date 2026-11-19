/*
   Description: 
   Author: 
   Date of last edit: 
*/

let passwordInput;


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	passwordInput = createInput();
	passwordInput.position(150, 48);
	
	
}

function draw() {
	background(255);
	
	fill(0);
	textSize(20);
	text("Password: ", 20, 65);
	text("Result: ", 20, 116)
}

