var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}] 
 
var arr2 = []
function recursive(arr){
 var count = 0
function rec(arr){
	for(var ele of arr){
			obj2 = ele.name
			obj3 = ele.age
			for(var key in ele){
				var array = [obj2, obj3];
			}

			arr2.push(array)
    }
}
rec(arr);
return arr2;
}

module.exports = {
    recursive
}

