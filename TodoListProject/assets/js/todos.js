// check of specific toods by clicking


//$("li").click(function(){

//changing to on click method to handle dynamic elements added in ul
// we added on click on ul because it already exists when html runs
// we cant run it on li because li keep on changing


$("ul").on("click","li",function(){

	$(this).toggleClass("completed");


	});

	// below code also works , but we replaced 10 lines of code with one line

	// // if li is gray turn it black else turn it gray
	
	// if($(this).css("color") === "rgb(128, 128, 128)"){

	// 	// will not work if we set color to "gray" instead of rgb color
	//     // print the color in console to verify

	// 	//turn it balck
	// 	//  $(this).css("color","black");
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none" 
	// 	});
		
	// }
	// else{
	// 	// turn int gray

	// 	// note object is used here as an argument to css function of jquery
	// 	// for multiple changes at same time

	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"  // javascript text-decoration not valid i.e "-" in name
	// });
	// }	



// Click on X to delete todo

// handling dynamic events

//$("span").click(function(event){

$("ul").on("click","span",function(){
	//$(this).parent().remove(); // span under li, parent helps to remove li
	//$(this).parent().fadeOut(); // differs from remove, still available on page, just display is set to none

	$(this).parent().fadeOut(500,function(){ // this refers to span here
		$(this).remove(); // this refers to li here.
	})
	event.stopPropagation(); // to stop event bubbling // li -> ul -> div -> body all clicks fired

})


$("input[type = 'text']").keypress(function(event){

	if(event.which === 13){ // enter key has code 13. which helps in checking key pressed

		// grab text from input
		var todotext = $(this).val();
		$(this).val("")

		// create a new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+todotext+"</li>");
	} 



})

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})


