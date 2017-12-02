console.log("connected")

var data = [];

var str = prompt("Enter what to do ?")

while(str !== "quit"){

	if(str === "new"){

		var newtodo = prompt("Enter new todo")

		data.push(newtodo);


	}else if(str === "list"){

		data.forEach(function(d){
			console.log(d)
		})
	} else if(str === "delete"){

		var newtodelete = prompt("Enter the index for deletion");

			data.splice(newtodelete,1);
	}else{
		console.log("bad input");
		break;
	}

	str = prompt("Enter what to do ?")
}

