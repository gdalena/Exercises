var DB = [];
schema = {id: "number", name: "string", age: "number", married: "boolean"}

function model(action, object,schema) {
	var obj2 = {};
	for(var key in schema){
		((key in object) && (typeof object[key] === schema[key]) && (object[key] !== undefined)) ? obj2[key] = object[key] : DB = [];
	}
	DB = [obj2];
	return DB
}

module.exports = {
    model
}
