/* */

var calc = function(n, n2, o){
	if(!o && n2 == '+' || n2 == '-') { 
		var o = n2
		n2 = 0
	} else if(!o && n2 == '*' || n2 == '/') {
		var o = n2
		n2=1
	}
	if(o == '+'){
		return  n + n2
	} else if(o == '-'){
		return  n - n2
	} else if(o == '*'){
		return   n * n2
	} else if(o == '/'){
		return  n / n2
	}
}	



 module.exports = {
     calc
 }