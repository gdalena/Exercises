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

function moviesDB(DB, genreType, movie) {
    var {title} = movie
    var indexGenre = DB.findIndex(function(e){
        return e.genre===genreType;
    });
   
 var foundGenre = DB.find(function(e){

   return e.genre === genreType;
 });
 
 var foundMovie = {};
 if(indexGenre !== -1){

     foundMovie = DB[indexGenre].movies.find(function(e){
       return e.title === title;
     });
 }
 
 if(!foundGenre){

   DB.push({genre: genreType, movies:[movie]})
   return {genre: genreType, movies:[movie]}
 } else if (!foundMovie){

   DB[indexGenre].movies.push(movie);
   return movie
 } else {

        return 'the movie ' + title + ' is already in the database!'
 }
}

module.exports ={
    moviesDB
}