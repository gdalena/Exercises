var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}

function sort(obj, element, type) {
	var arr = [];
	var obj2 = {};
	var arr2 = [];
	var arr3 = [];
	var arr4 = [];
	var result = [];
	for(var key in obj){
		arr = Object.keys(obj)
		arr2 = Object.values(obj)
	}
	if(!element || !type){
		result = console.log("missing argument here!")
	} else {
		if(element == 'values' && type == 'ascending'){
			arr2.sort(function(a,b) { return a -b})
			for(i=0; i<arr2.length; i++){
				for(var key in obj){
					if(arr2[i] == obj[key]) {
						obj2[key] = obj[key]
					}
				}
			}
		} else if(element == 'values' && type == 'descending'){
			arr2.sort(function(a,b) { return b - a})
			for(i=0; i<arr2.length; i++){
				for(var key in obj){
					if(arr2[i] == obj[key]) {
						obj2[key] = obj[key]
					}
				}
			}
		} else if(element == 'keys' && type == 'ascending'){
			arr.sort()
			for(i=0; i<arr.length; i++){
				for(var key in obj){
					if(arr[i] == [key])
						obj2[key] = obj[key]
					}
			}
		} else if(element == 'keys' && type == 'descending'){
			arr.sort().reverse()
			for(i=0; i<arr.length; i++){
				for(var key in obj){
					if(arr[i] == [key])
						obj2[key] = obj[key]
					}
			}
		}
	}
	return obj2
	
}


module.exports ={
    sort
}