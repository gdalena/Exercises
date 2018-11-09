var arr = [1,5,9,33,65,122,66,['banana']]

function is_an_even_number(arr) {
	var count = 0
	arr.forEach(function(a,b,arr) {
		if(isNaN(typeof a)) {
		 if(a % 2 == 0) {
		 	count++ };
		 };
	} );
return count}
	

module.exports = {
    is_an_even_number
}