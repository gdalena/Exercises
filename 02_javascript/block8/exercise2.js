var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}] 
 
var arr2 = []
function recursive(arr){
 var count = 0;
function rec(arr){
		if(count < arr.length-1){
			count++;
		var [ele] = arr
		var {name} = ele
		var {age} = ele
		var array = [[name],[age]]
		arr2.push(array)
			rec(arr);
	}
}

	rec(arr);
return arr2;
}
//		var [ele] = arr
//		var {name} = ele
//		var {age} = ele
//		var array = [name, age]
//		arr2.push(array)
//
//	if(num >arr.length){		
//		console.log(arr2)
//
//	} 
//	return recursive(arr, num -1)
//	}


module.exports = {
    recursive
}

