var a =[1,2,3,4,5]
var b= [1,"1",1,1]
var c = ["a","b","p"]

function printReverse(a){

	var num = a.length;

	for(var i = a.length-1;i>-1;i--){
		console.log(a[i]);
	}
}

function isUniform(a){

	for(var i=0;i<a.length-2;i++){
		if(a[i] == a[i+1])
			continue;
		else{
			return false;
		}
	}
	return true;
}

function sumArray(a){
	var num =0;

	a.forEach(function(val){
		num+=val;
	}
	);

	return num;
}

function maxValue(a){

	var num = a[0];

	a.forEach(function(val){

		if (val > num)
			num= val;


	});

	return num;
}

printReverse(a)
console.log(isUniform(c));
console.log(sumArray(a));
console.log(maxValue(a));