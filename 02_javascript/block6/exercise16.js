var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}

const sort = (obj, by, order) => {
    let sortAction = order+by
    let arr = [];
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }
    let sorter = {
        ascendingvalues  : ( ) => arr.sort((a, b) =>  a[1] - b[1]),
        descendingvalues : ( ) => arr.sort((a, b) =>  b[1] - a[1]),
        ascendingkeys    : ( ) => arr.sort(),
        descendingkeys   : ( ) => arr.sort().reverse()
    }
    sorter[sortAction]()
    let newObj = {}
    arr.forEach(ele => newObj[ele[0]] = ele[1])
    return newObj;
}

/*function sort(obj, element, type) {
	var arr = [];
	var obj2 = {};
	var arr2 = [];
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
	
}*/


module.exports ={
    sort
}