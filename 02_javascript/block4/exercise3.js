/*var count =0; count2 = 0; count3 =0; count4= 0;count5=0; arr2 = []; total =0;
function check_types(arr) {
	arr.forEach(function(a,b) {
		if((typeof arr[b] === 'boolean') && (typeof arr2[b] !== 'boolean')){
			arr2.push(arr[b])
			total +=1
		} else if((typeof arr[b] === 'string')  && (typeof arr2[b] !== 'string')){
			arr2.push(arr[b])
			total +=1
		} else if((typeof arr[b] === 'null')  && (typeof arr2[b] !== 'null')){
			arr2.push(arr[b])
			total +=1
		} else if((typeof arr[b] === 'number')  && (typeof arr2[b] !== 'number')){
			arr2.push(arr[b])
			total +=1
		} else if((typeof arr[b] === 'undefined')  && (typeof arr2[b] !== 'undefined')){
			arr2.push(arr[b])
			total +=1
		} else if((typeof arr[b] === 'object')  && (typeof arr2[b] !== 'object')){
			arr2.push(arr[b])
			total +=1
		}
	})
	return total
}*/
/*
function check_types(arr){
	var arr2 = [];count = 0;
	for(i=0; i<arr.length; i++){
		if((typeof arr[i] === 'boolean' && arr.includes(arr[i]) === false) || (typeof arr[i] === 'string' && arr2.includes(arr[i]) === false) || (typeof arr[i] === 'null' && arr2.includes(arr[i]) === false) || (typeof arr[i] === 'number' && arr2.includes(arr[i]) === false) || (typeof arr[i] === 'undefined' && arr2.includes(arr[i]) === false)) {
			count++
		}
	}
	return count
}
*/

module.exports ={
    check_types
}