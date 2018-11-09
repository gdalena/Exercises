var arr = [1,2,3,4,5]

function timesTwo(arr) {
	var newArray = []
	arr.forEach(function(a,b,arr) {
		newArray.push(arr[b] *2) 
	})
	return String(newArray)
	return String(arr)
}
	
	
module.exports ={
    timesTwo
}