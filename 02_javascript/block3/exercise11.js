var str = 'An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345'

function lowerCaseLetters(str) {
	var str = str.split('')
	var str2 = []
	for(i=0; i<str.length; i++){
		if(isNaN(Number(str[i]))) {
	
			if(str[i].toUpperCase() === str[i] && str[i] !== str[0] ){
				str2.push(' '+str[i])
			}else str2.push(str[i])
		} 
	}
	
	return str2.join('').toLowerCase()
}

module.exports = {
	lowerCaseLetters
}
