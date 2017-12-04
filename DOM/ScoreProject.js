var score_one =0;
var score_two =0;
var num = 5;
var gameOver = false;

var Player = document.querySelectorAll("button");
var PlayerOne = Player[0];
var PlayerTwo = Player[1];
var Reset = Player[2];

var input = document.querySelector("input");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

PlayerOne.addEventListener("click",function(){
	if(!gameOver){
		score_one++;
		if(score_one === num){
			span1.classList.add("winner")
			gameOver = true;
		}
		span1.textContent = score_one
	}
	

});

PlayerTwo.addEventListener("click",function(){
	if(!gameOver){
		score_two++;
		if(score_two === num){
			span2.classList.add("winner")
			gameOver = true;
		}
	span2.textContent = score_two;
}
});

input.addEventListener("change",function(){

	span3.textContent = input.value;
	num = Number(input.value);
	resetGame();
})


Reset.addEventListener("click",function(){
	resetGame();
})

function resetGame(){
	score_one = 0;
	score_two = 0;
	span1.textContent = score_one;
	span2.textContent = score_two;
	gameOver =false;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
	num=5;
	span3.textContent = num;
}