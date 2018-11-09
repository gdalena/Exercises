var arr = ['cheese','salame','bread','water','pizza']
var position = 2 
function splicer (arr, position){
	var arr2 = arr.splice(position,1);
	return String(arr)
}

module.exports = {
    arr, position, splicer
}