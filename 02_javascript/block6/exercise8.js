var last = function(obj, key) {
	for(var key in obj){
		var newObj= {[key]: obj[key]}	
	}
	return newObj
}

module.exports ={
    last
}
