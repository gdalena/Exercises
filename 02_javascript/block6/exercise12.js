schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false}
    }
DB = [];
 const model = (action, obj, schema) =>{
    const DB = []
    if (!action || action != 'add') return "missing action argument or wrong provided";
    let newObj = {}
    for(let key in obj){
        key in schema && typeof obj[key] === schema[key].type ? newObj[key] = obj[key] :null
    }
    for (let key in schema){
        newObj[key] === undefined && schema[key].default !== undefined ? newObj[key] = schema[key].default : null
    }
    DB.push(newObj)
    return DB;
}

/*function model(action, DB, schema){
	var obj2 = {}, obj3 = {}; array = [], array2 = [], array3 = {};
    if (!action || action != 'add') return "missing action argument or wrong provided";
	for(var key in schema){	
		var value = schema[key]
		if(key in DB) {
			for(var newKey in value){
				if((newKey === 'type') && (typeof DB[key] === value[newKey])){

					obj3[key] = DB[key]
				}
        	}
		array2 = [obj3]		
        } else {
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
}*/
module.exports = {
    model
}