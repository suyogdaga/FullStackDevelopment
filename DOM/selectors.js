// ways of accesing an element or elements
var a = document.getElementById("highlight")
var b = document.getElementsByClassName("special");
var c = document.getElementsByTagName("h1");
var d = document.querySelector(".extra");
var e = document.querySelectorAll("p");


// manipulationg individual styles for each element

a.style.color ="purple";
a.style.border ="1px solid green";

// for multiple elements use for loop and then set property

// for(var i=0; i<b.length;i++){
// 	b[i].style.color ="orange";
// }


// using css class for maniputaltation
// we right code in css style
// and set the class on for an element
// classlist is not an array, it is a read only list
d.classList.add("extra")

// removing an class
d.classList.remove("extra")

// toggle on - off
d.classList.toggle("extra")


// text-content and innerHtml
// check in console

//Returns a string of all the text contained in a given element
// console.log(e[0].textContent);
e[0].textContent= "blah blah blah"
// console.log(e[0].textContent);

//Similar to textContent, except it returns a string
//of all the HTML contained in a given element

// console.log(e[1].innerHTML);
e[1].innerHTML = " hello world"
// console.log(e[1].innerHTML);


// attributes getAttribute and setAttribute

var link = document.querySelector("a");
// console.log(link.getAttribute("href"));
link.setAttribute("href","https://www.linkedin.com");
// console.log(link.getAttribute("href"));


// Event Listeners
// click, hover drag and drop pressing the enter key

// on click what to do
var click = document.querySelector("img");

click.addEventListener("click",function(){
	alert("Image was clicked");
	click.style.background = "orange";
})


// clicking any list event
var lis = document.querySelectorAll("li");

// for(var i=0; i<lis.length;i++){
// 	lis[i].addEventListener("click",function(){
// 		this.style.color = "pink";
// 	})
// }

// changing the body backgeound if button is clicked
var button  = document.querySelector("button");
var state = false;

button.addEventListener("click",function(){

	if(state == false){
		document.body.style.background = "purple";
	}else{
		document.body.style.background = "white";
	}

	state = !state;
})


// hover events

for( var i=0; i<lis.length;i++){

	lis[i].addEventListener("mouseover",function(){

	this.style.color = "green";
})

lis[i].addEventListener("mouseout",function(){

	this.style.color = "black";
})

lis[i].addEventListener("click",function(){

	this.classList.toggle("done");
})

}
