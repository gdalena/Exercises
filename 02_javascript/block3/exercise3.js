
function isEven(arr) {
	var count = 0
	arr.forEach(function(ele) { 
		if(ele % 2 == 0) {
			count++ }
} )
 return count
}

module.exports ={
    isEven
}
