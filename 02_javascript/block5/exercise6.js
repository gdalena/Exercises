/*var currenciesDB = [];
var result = []; 
var count = 0;

function dinamicConverter(action, arr, e) {
	if(action == 'add'){
		function index() {
			for(var ele of arr){
				 return indexOf(ele) == -1
			}
		}
		if(currenciesDB.findIndex(index)){
			currenciesDB.push(arr)
			count++
		return count
		}	else {
		return "invalid data provided!"
		}
	} else if(action =='convert'){
		for(var ele in currenciesDB){
			if(ele[0] == arr[0]){
			return (ele[1]/arr[1])*100
			}
		}
	}
}*/

module.exports ={
    currenciesDB, dinamicConverter
}