var DB = []; obj2 = {};
schema = {id: "number", name: "string", age: "number", married: "boolean"}
DB = []
/*
function model(action, object,schema) {
	if(action == 'add'){
		for(var key in object){
			for(var key2 in schema){
				if(Object.is(key,key2)) {
					if((typeof object[key]) == schema[key]) {
						if((object[key] != undefined)){
							if((key2 in object)){
								obj2[key2] = object[key]
								DB = [obj2]
							} else if(key2 in object == false){
								DB = [obj2]
							}
						}
					}
             
				}
			} 
		}
	
	}
	return DB
}*/

module.exports = {
    model
}
