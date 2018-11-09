

var sumAll = function(obj, key) {
	var num = 0
	var result = 0
	if(obj){
		array = Object.values(obj)
		array.forEach(function(ele,i,array){
			result += array[i]
		})
	} else if(!obj){
		result=0
	}
	return result
}
module.exports = {
    sumAll
}
