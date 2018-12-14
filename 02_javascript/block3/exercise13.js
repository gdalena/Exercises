var str = "Antonello sanna";

function shortener(str) {
	str = str.split([' '[0]])
	var name = str[0];
	var name2 = []
	name2 = name.split("")
	name2[0] = name2[0].toUpperCase()
	name2 = name2.join('')
	var lastName = str[1];
	var lastName2 = lastName[0] + '.'
	lastName2 = lastName2.toUpperCase()

	return name2 + ' ' + lastName2		
	}

/*const shortener = str => {
	let word = str.split(' ');
	return word[0] + ' ' + word[1][0].toUpperCase() + '.'; 
};*/
	
module.exports = {
    shortener
}