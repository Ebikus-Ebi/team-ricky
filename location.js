fetch("https://rickandmortyapi.com/api/location").then(response=>{
	return response.json()
// console.log("Before")
}).then(data=>{
	console.log(data.results)
	data.results.forEach(item=>{
		  		
			// document.getElementById("image").src = item.image
			document.getElementById("id").innerHTML = item.id
			document.getElementById("name").innerHTML = item.name
			document.getElementById("type").innerHTML = item.type
			document.getElementById("dimension").innerHTML = item.dimension
			// document.getElementById("nofVisits").innerHTML = item.nofVisits
			document.getElementById("created").innerHTML = item.created

	})
})

// console.log("after function")

// function search(){
//   var searchFor = document.getElement('')
//   var searchIndex = names.indexOf(searchFor);
//   if(searchIndex == -1)
//     $("#search-results").html("no results");
//   else
//     $("#search-results").html(searchFor);
// }
// $("#search-input").on("keyup", search);


// axios.get('https://rickandmortyapi.com/api/character')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })