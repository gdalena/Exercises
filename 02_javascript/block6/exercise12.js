schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false}
    }
DB = [];
 
function model(action, DB, schema){
var obj2 = {}, obj3 = {}; array = [], array2 = [], array3 = {};
	for(var key in schema){	
		if(key in DB) {
			var value = schema[key]
			for(var newKey in value){
				if((newKey === 'type') && (typeof DB[key] === value[newKey])){

					obj3[key] = DB[key]
				}
        	}
		array2 = [obj3]		
        } else if(key in DB === false) {
			var value = schema[key]
			for(var newKey in value){
				if(newKey === 'default'){
 					obj2 = { [key] : value[newKey]}
                } 
            }
		array = obj2	
		} 
    }
debugger
for(var e in obj3){
    {array3[e] = obj3[e]}
 	for(var e in obj2){
        {array3[e] = obj2[e]}
 	}
 }
debugger
return [array3]
}
module.exports = {
    model
}