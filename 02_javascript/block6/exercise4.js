var movies = ['matrix','the dark knight','a beautiful mind','american pie'];

function addToList(movies) {
	var movieList = {}; 
	var movieLists= [];
	var index = 0;
	movies.forEach(function(ele,i,movies) { 
			movieList = ({'title' : movies[i],
								'id' : movieLists.length
			})
			movieLists.push(movieList)
debugger
	})
	 return movieLists
}

module.exports = {
    addToList
}