var obj = {a: 1, b: 2}

function swap(obj){
	var newObje = {}
for( var key in obj){
	newObje[obj[key]] = key;
	
}
	return newObje
}


module.exports= {
    swap
}