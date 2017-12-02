function helloworld(){
	return "Hello ";
}

function printnumber(a,b){
	return a+b;
}


function capitalize(a){

	if(typeof a === "number"){
		return "Invalid input"
	}

	return a.toUpperCase();
}


function isEven(a){

	if( typeof a === 'number'){

		if( a%2 == 0){
			return true;
		}
		return false;

	}else{
		return "Invalid input";
	}
}


function factorial(a){

	if( typeof a === 'number'){

		if(a == 1 || a== 0){
			return 1;
		}else{
			return a * factorial(a-1);
		}

	}else{
		return "Invalid input"
	}
}


function kebakToSnake(a){

	if(typeof a === 'string'){
		 var v =""
		 for(var i =0; i< a.length;i++){
		 	if(a.charAt(i)=='-'){
		 		v+='_'
		 		continue;
		 	}
		 	v+=a.charAt(i);
		 }

		return v.toUpperCase();

	}else{
		return "Invalid input"
	}
}