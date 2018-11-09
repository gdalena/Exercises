	DB = [
    {
        genre:'thriller', 
        movies:[
            {
                title:'the usual suspects', release_date:1999
            }
        ]},
        {
        genre:'commedy', 
        movies:[
            {
                title:'pinapple express', release_date:2008
            }
        ]}
]


/*
function moviesDB(DB, genres, movie) {
var result = []; 
var result2= [];
for( var u in movie){
var title1 = movie[u]
}
DB.forEach(function(a,b,DB){
	for(var key in a){
		 if(key == 'genre'){
			if(a[key] != genres){
debugger
				a['genre'] = genres
			} else if(a[key] == genres) { count++; }
        } else if(key == 'movies'){
debugger	
			var z = a[key]
			for(var item of z){
				for(var item2 in item){
debugger
					if(item2 == 'title'){
debugger
						result = item[item2]
					}
            	}
			}
				if(result == title1){
debugger
					result2 = `the movie ${title1} is already in the database!`
                } 
			}
		} 
    })
return result2
}*/
module.exports ={
    moviesDB
}