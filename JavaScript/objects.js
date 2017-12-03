 var movieDB = [{
 	title:"Lagaan",
 	rating:4,
 	hasWatched:true
 },
 {
 	title: "Incredibles",
 	rating: 4.5,
 	hasWatched: false
 },
{
 	title: "Incred",
 	rating: 0.5,
 	hasWatched: true
 },
 {
 	title: "redi",
 	rating: 4.2,
 	hasWatched: false
 }]


function buildMovie(movie){

 	var result = "You have ";
 	if(movie.hasWatched){
 		result+= " watched ";
 	}else{
 		result +=" not seen ";
 	}

 	result += "\""+ movie.title + "\" - ";
 	result += movie.rating+ " stars ";
 	return result;

 }
 
 movieDB.forEach(function(movie){
	console.log(buildMovie(movie));
 })

 