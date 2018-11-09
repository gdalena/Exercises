var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}

function sort(obj) {
	var arr = [];
	var obj2 = {};
	var arr2 = [];
	var arr3 = [];
	var arr4 = [];
	for(var key in obj){
		arr = Object.keys(obj)
		arr2 = Object.values(obj)
	}
	arr2.sort(function(a,b) { return a -b})
	for(i=0; i<arr2.length; i++){
			for(var key in obj){
				if(arr2[i] == obj[key]) {
					obj2[key] = obj[key]
				}
			}
		}

	return obj2
	
}
module.exports ={
    sort
}
