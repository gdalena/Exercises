var arr  = ['mike','john',true, false,12,true,false, false,true,false,true,false]
var maxCapacity = 5

function boolanChecker (arr,maxCapacity){
	var bool = []
	for (i = 0; i < arr.length; i++) {
		if(typeof arr[i] == 'boolean' && bool.length < maxCapacity) {

			bool.push(arr[i])
		} else if(!maxCapacity && typeof arr[i] == 'boolean' ) { 
				maxCapacity = Infinity 
				bool.length < maxCapacity;
				bool.push(arr[i])
		}
	result = `${bool.length} booleans were found ${bool}`
	}
	return result
}

module.exports = {
    boolanChecker
}