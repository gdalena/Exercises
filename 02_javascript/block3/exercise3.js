
function isEven(arr) {
	var count = 0
	arr.forEach(function(ele,i,arr) { 
		if(ele % 2 == 0) {
			count++ }
} )
 return count
}

module.exports ={
    isEven
}
