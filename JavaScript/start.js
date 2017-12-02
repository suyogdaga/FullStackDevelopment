alert("Connected");

// var Name = prompt("What is your name ?");
// var lastName = prompt("What is your lastName?");
// var age = prompt("what is your age?");


// console.log("Welcome "+Name+" "+lastName);
// console.log("Ages is "+age)
// console.log("You have lived for "+age*365.25+" days")


var num = -10;
var num1 = 10;
var num2 = 300
var num4 = 5;



while(num<=19){
	console.log(num);
	num++;
}
console.log("problem 1 solved")

while(num1<=40){
	if(num1%2==0){
		console.log(num1)
	}
	num1++;
}

while(num2<=333){
	if(num2%2!=0){
		console.log(num2)
	}
	num2++;
}

while(num4<=50){
	if(num4%3==0){
		console.log(num4)
		num4++;
		continue;
	}else if(num4 %5 ==0){
		console.log(num4)
		num4++;
		continue;
	}
	num4++;
}