
var name = 'Anna';
var name2 = "Jack";
var age = 35;
var age2 = 16;

/**/
function check_who_is_older(name, age, name2, age2) { 
	var result = 0
	var equal = 'They are in the same age'
	var ageBigger = name + ' age '+ age +' is older than ' + name2+' age '+ age2
	var age2Bigger = name2 + ' age '+ age2 +' is older than ' + name+' age '+ age
	if((age == age2) ) {
		result = 'They are in the same age'
     } else if(age > age2) {
        result = name + ' age '+ age +' is older than ' + name2+' age '+ age2
     } else if(age2 > age) {
     	result = name2 + ' age '+ age2 +' is older than ' + name+' age '+ age
     }
      return result
}
    module.exports = {
    check_who_is_older
}