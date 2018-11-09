var arr = [{name:'Antonello'}, {name:'George'}, {name:'Golda'}]


function getIndex(arr,key,value) {
	var result = -1
	arr.forEach(function(a,b) {
		for(var key in a) {
			if(a[key] ==value){
				result= arr.indexOf(a) 
			}
		}
	}) 
	return result
}

module.exports ={
    getIndex
}

