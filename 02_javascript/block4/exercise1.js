
var name = 'Anna';
var name2 = "Jack";
var age = 35;
var age2 = 16;

function check_who_is_older(name, age, name2, age2) { 
	let result = 0
	if((age == age2) ) {
		result = 'They are in the same age'
     } else if(age > age2) {
        result = name + ' age '+ age +' is older than ' + name2+' age '+ age2
     } else {
     	result = name2 + ' age '+ age2 +' is older than ' + name+' age '+ age
     }
      return result
}
    module.exports = {
    check_who_is_older
}