var num = 2;
var str = 'BarcelonaCodeSchool';


function stringChop(str, num) {
	var str2 = []
	var str3 = []
	if(!num){
		str3.push(str)
	} else if(num == 0) {
		str3.push(str)
	} else {
	for (i =0; i < str.length; i+=num) {
		str2 = str.substring(i, i+num)
			str3.push(str2)
	}
debugger
}
 return str3
}

module.exports = {
    stringChop
}