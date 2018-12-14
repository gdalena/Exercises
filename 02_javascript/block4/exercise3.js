function check_types(arr) {
	var total=0, arr2 = [], result = 0;
	for(i=0; i<arr.length; i++) {
		if(arr2.indexOf(typeof arr[i]) === -1) {
	debugger 
			arr2.push(typeof arr[i]);
		}
	}
debugger
	return arr2.length;
}

/*function check_types(arr) {
	var  arr2 = [];result = 0;
	for(i=0; i<arr.length; i++) {
	arr2.push(typeof arr[i]);
	}
let total = [...new Set(arr2)];
	return total.length;
}*/


module.exports ={
    check_types
}