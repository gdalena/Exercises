var result = [];

var checkAge = function(monthIndex, day, year) {
	monthIndex-=1
	var date1 = new Date();
	var todayDay = date1.getDate();
	var todayMonth = date1.getMonth();
	var todayYear = date1.getFullYear()
	var date2 = new Date(year, day, monthIndex);
	date2.setFullYear(todayYear)
	var birthdayDay = day;
	var birthdayMonth = monthIndex;
	var birthdayDays = birthdayDay - todayDay
	var birthdayMonths = birthdayMonth - todayMonth

	if(birthdayMonth == todayMonth && birthdayDay == todayDay) {
		result =   'happy birthday!';
	} else if(birthdayDay > 30 || birthdayDay <=0 || birthdayMonth <= 0 || birthdayMonth > 11) {
		result = "Error invalid data provided"
	} else  if(birthdayMonth < todayMonth) {
		result = 'Sorry your birthday is passed for this year';
	} else if(birthdayMonth == todayMonth && birthdayDay > todayDay) {
		result = 'your birthday will be in ' + birthdayDays + ' days';
	} else if(birthdayMonth > todayMonth && birthdayDay < todayDay) {
		result = 'your birthday will be in ' + birthdayMonths + ' months and ' + birthdayDays + ' days';
	}  

	return result 
}  


/*

	monthIndex-=1
	var date1 = new Date();
	var date2 = new Date(monthIndex, day);

	var

	var birthday = date2.getDate()
	var difference = Math.trunc(date1 - date2)/(24*60*60*1000)
	//var oneYear = (Math.trunc(days/365))
	if(difference == 0){
		result =  'happy birthday!';
	} else if( difference < 0 ) {
		result = 'Sorry your birthday is passed for this year';
	} else  if(difference > 0 && difference < 30) {

		result = 'your birthday will be in ' + birthday + ' days';
	} else  if(difference > 0 && difference > 30) {

		result = 'your birthday will be in ' + Math.trunc(difference/30) + ' months and ' + (difference - Math.trunc(difference/30))*100 + ' days';
	}

	return result
}
*/ 
module.exports = {
    checkAge
}