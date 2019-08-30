fetch("https://rickandmortyapi.com/api/episode").then(response=>{
	return response.json()
// console.log("Before")
}).then(data=>{
	console.log(data.results)
	data.results.forEach(item=>{
		  		
			document.getElementById("name").innerHTML = item.name
			// document.getElementById("date").innerHTML = item.air_date
			document.getElementById("episode").innerHTML = item.episode
			// document.getElementById("characters").innerHTML = item.characters
			document.getElementById("created").innerHTML = item.created

			

	})
})
