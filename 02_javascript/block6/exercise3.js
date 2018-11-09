 var obj = {a: 1, b: 2}

function modifyObject(obj, key, argument) {
	 obj[key] = argument;
	 return obj
}
module.exports ={
    obj, modifyObject
}