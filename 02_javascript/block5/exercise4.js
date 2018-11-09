var result = [];

var tellAge = function(monthIndex, day, year) {
	monthIndex-=1
	var date1 = new Date();
	var date2 = new Date(year, monthIndex, day);
	var days = Math.trunc(date1 - date2)/(24*60*60*1000)
	var oneYear = (Math.trunc(days/365))
	if((oneYear) == 1){
		result =  'You are ' + oneYear + ' year old';
	} else if( days < 365) {
		result = 'You are ' + Math.trunc(days) + ' days old';
	} else  if(days > 365 && (Math.trunc(days/365) != 1)) {
		result =  'You are ' + Math.trunc(days/365) + ' years old';
	}

	return result
}
module.exports = {
    tellAge
}

