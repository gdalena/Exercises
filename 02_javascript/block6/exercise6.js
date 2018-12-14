var arr = [{name:'Antonello'}, {name:'George'}, {name:'Golda'}]
/*const getIndex = (a, key, val) => {
	let ind = -1;
	for (let i = 0; i < a.length; i++){
	    if(a[i][key] === val) {
			ind = i;
			break;
		}
	}
	return ind
}*/

function getIndex(arr,key,value) {
	var result = -1
	arr.forEach(function(a,b) {
		if(a[key] ==value){
			result= arr.indexOf(a) 
		}
	}) 
	return result
}

module.exports ={
    getIndex
}

