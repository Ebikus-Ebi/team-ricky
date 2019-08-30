fetch("https://rickandmortyapi.com/api/character").then(response=>{
	return response.json()
// console.log("Before")
}).then(data=>{
	console.log(data.results)
	data.results.forEach(item=>{
		  		
			document.getElementById("image").src = item.image
			document.getElementById("name").innerHTML = item.name
			document.getElementById("id").innerHTML = item.id
			document.getElementById("species").innerHTML = item.species
			document.getElementById("gender").innerHTML = item.gender
			document.getElementById("status").innerHTML = item.status
			document.getElementById("origin").innerHTML = item.origin
			document.getElementById("location").innerHTML = item.location.name

	})
})

// console.log("after function")

function search(){
  var searchFor = document.getElement('')
  var searchIndex = names.indexOf(searchFor);
  if(searchIndex == -1)
    $("#search-results").html("no results");
  else
    $("#search-results").html(searchFor);
}
$("#search-input").on("keyup", search);


// axios.get('https://rickandmortyapi.com/api/character')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })