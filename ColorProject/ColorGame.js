var numsquares =6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".squares")
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",function(){


	// generate new set of colors
	colors = generateRandomColors(numsquares);

	// update pickedcolor once new colors are generated
	pickedColor = pickColor();

	//set color display text content to new picked color
	colorDisplay.textContent = pickedColor;

	for(var i =0; i < squares.length;i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background= "steelblue";
})

easyButton.addEventListener("click", function(){

	hardButton.classList.remove("selected")
	easyButton.classList.add("selected")

	numsquares =3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i =0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	h1.style.background= "steelblue";
})

hardButton.addEventListener("click", function(){

	easyButton.classList.remove("selected")
	hardButton.classList.add("selected")

	numsquares=6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i =0; i < squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

	h1.style.background= "steelblue";
	
})

for(var i=0; i<squares.length;i++){

	// add initial colors
	squares[i].style.background = colors[i];

	// add event listener to each square, with click event
	squares[i].addEventListener("click",function(){

		// colour of the object clicked
		var clickedColor = this.style.background;

		// if match , do something
		if(pickedColor === clickedColor){
			resetButton.textContent="Play again ?"
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.background= clickedColor;
		}else{
			this.style.background= "#232323";
			messageDisplay.textContent ="Try Again"
		}
	})
}


function changeColors(color){

	// loop through all squares to change all colours

	for(var i=0; i<squares.length;i++){
		squares[i].style.background= color;
	}
}

function pickColor(){

	// generate a random in range of 0 and array length
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){

	// make an array 
	// add num colors to array
	// return array

	var arr =[]

	for( var i=0; i<num;i++){
		arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
	// pic a red from 0 to 255
	// pic a green from 0 to 255
	// pic a blue from 0 to 255

	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);

	return "rgb("+ r + ", " + g + ", " + b + ")";
}