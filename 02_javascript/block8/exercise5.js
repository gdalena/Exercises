var result = 0;
function sorter(arr, order) {
	if(order == 'ascending'){
		arr.sort(function(a,b){ return a -b})
	} else if(order == 'descending'){
		arr.sort(function(a,b){ return b -a})
	} else if(!order){
		order == 'ascending'
		arr.sort(function(a,b){ return a -b})
	} else {
		return	`wrong order provided ${order} please provide us with ascending or descending order instructions`
	}
	return arr		
}

module.exports ={
    sorter
}