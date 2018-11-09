var arr3 = [];
var arr2 = [];
var arr = ['sdads', 'sadsasadasddsaddsadadsasd'];
var dataType = 'number';
var minLength = 5;

function filter (arr, dataType, minLength) {
	for(i=0; i<arr.length; i++){
	if((arr[i].length > minLength) && (typeof arr[i] != dataType) && arr3.includes(arr[i]) === false ) {
		arr3.push(arr[i])
	}
	}
return String(arr3)
}


module.exports = {
    filter
}