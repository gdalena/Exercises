var arr = [1,2,3,4,5]

function timesTwo(arr) {
	var newArray = []
	arr.forEach(function(a) {
		newArray.push(a *2) 
	})
	return String(newArray)
}
	
	
module.exports ={
    timesTwo
}