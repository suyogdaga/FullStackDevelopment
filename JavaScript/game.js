var secretNumber =7;
var k = Number(prompt("Enter the number"));

if(k<secretNumber){
	alert("Number "+k+" is very low");
}else if(k===7){
	alert("you guessed it correct");
}else{
	alert("Number "+k+" is very high");
}