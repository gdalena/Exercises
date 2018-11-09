
var calc = function (num, num2, operator) {
	if(operator == '+'){
		return num + num2
	} else if(operator == '-'){
		return num - num2
	} else if(operator == '*'){
		return num * num2
	} else if(operator == '/'){
		return num / num2
	} else if(operator == undefined) {
		return 'wrong data provided'
	}
}
module.exports = {
    calc
}