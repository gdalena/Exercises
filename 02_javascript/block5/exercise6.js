/* var indexGenre = DB.findIndex(function(e){
        return e.genre===genreType;
    });

dinamicConverter('add', ['euro',1.2]),1)
    */
/*var currenciesDB = [], index = 0, result; 
function dinamicConverter(action, arr) {
var count = 0, arr2, result; 
	if(!currenciesDB){
		if(action == 'add'){
			currenciesDB.push(arr)
			result = currenciesDB.length
		}
	} else	{
		if(action == 'add'){
			for(var ele of currenciesDB){
				for(var e of ele){
					if(e === arr[0]){
						result = "invalid data provided!"
					} else {
						currenciesDB.push(arr)
						result = currenciesDB.length
					}
				}
			}
		} else if(action =='convert'){
			for(var ele of currenciesDB){
				if(ele[0] !== arr[0]){
					result = (ele[1]/arr[1])*100
				} else {
					result = "invalid data provided!"
				}
			}
		}
	}
	return result 
}*/



/*var currenciesDB = [], result = [], index = 0;
function dinamicConverter(action, arr) {
var count = 0, arr2, result; 
	if(action == 'add'){
for(var ele of currenciesDB){
 var currency = ele
}
		var index = currenciesDB.findIndex(currency => currency === [arr]);
		if(index === -1){
			currenciesDB.push(arr)
			result = currenciesDB.length
		} else {
			result = "invalid data provided!"
		}	
	} else if(action =='convert'){
		for(var ele of currenciesDB){
			if(ele[0] !== arr[0]){
			result = (ele[1]/arr[1])*100
			} else {
				result = "invalid data provided!"
			}
		}
	}
	return result 
}*/

module.exports ={
    currenciesDB, dinamicConverter
}