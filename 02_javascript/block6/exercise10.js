var DB = []; obj2 = {};
function model(action, object,schema) {
		for(var key in object){
			for(var ele of schema){
				if(Object.is(key,ele)) {
					if(object[key] != undefined){
					obj2[key] = object[key]
					DB = [obj2]
					}
				}
			}
		} 
	return DB
}

module.exports = {
    model
}