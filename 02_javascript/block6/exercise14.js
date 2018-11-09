var obj = {a: 1, b: 2, c: 2}

function splice(obj, num, num2) {
	var arr = [];
	var obj2 = {};
	var arr2 = [];
	var arr3 = [];
	var arr4 = [];
	if(!num2){
		num2 = 1}
	for (var key in obj) {
		arr = Object.keys(obj)
		arr2 = Object.values(obj)
	}
	for(i=num; i<=num2; i++){
		arr3.push(arr[i])
		arr4.push(arr2[i])
	}
	arr3.length = arr4.length
	for(i=0; i<arr3.length; i++){
		obj2[arr3[i]] = arr4[i]	
	}
	return obj2
}

module.exports ={
    splice
}