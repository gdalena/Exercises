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

function moviesDB(Db, genreType, movie) {
  
var indexGender = Db.findIndex(function(e){
    return e.genre===genreType;
});
    
 var foundGender = Db.find(function(e){
   return e.genre === genreType;
 });
 
 var foundMovie = {};
 if(indexGender !== -1){
     foundMovie = Db[indexGender].movies.find(function(e){
       return e.title === movie;
     });
 }
 
 if(!foundGender){
   Db.push({genre: genreType, movies:[{title: movie}]})
     console.log('Gender: ' + genreType + ' and movie ' + movie + ' added to the list')
   console.log(Db);
 } else if (!foundMovie){
   Db[indexGender].movies.push({title: movie});
   console.log('Movie: ' + movie + ' added to the database' )
 } else {
        console.log('the movie' + movie + ' is already in the database')
 }
}

moviesDB(DB,'thrilldfsdfer', 'the usuasdsal suspects');


/*function moviesDB(DB, genres, movie){
    var result = [];
    for(var u in movie){
        var title1 = movie[u]
    }
    for(var item of DB){
    var {genre} = item 
    var {movies} = item
    var [item2] = movies
    var {title} = item2
    if(genre === genres && title === title1){
        result =  `the movie ${title1} is already in the database!`
        break;
    } else if(genre !== genres && title !== title1){

        item = {genre : genres, 
                movies: [{'title' : title1}]
                }
        result = movie
    } else if(genre === genres && title !== title1){

        movies.push({title : title1})
        result = movie
    }
}

return result 
}*/


module.exports ={
    moviesDB
}