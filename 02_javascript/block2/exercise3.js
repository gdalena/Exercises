var arr  =  ['banana','apple','orange'];
var arr2 =  ['tv','dvd-player','playstation']; 
var pos  =  2;

function swap(arr, arr2, pos){
		var temp = arr[pos]
		arr.pop()
		arr.push(arr2[pos])
		arr2.pop()
		arr2.push(temp)
	return String([arr.concat(arr2)])
}

module.exports ={
    arr, arr2, pos, swap
}