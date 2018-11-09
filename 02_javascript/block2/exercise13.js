var str = 'I,Really,Like,Pizza'
var character = ","
function characterRemover(str, character) 
{
	var str2 = str.split(character).join(" ")
	return str2
}

module.exports = {
    str, characterRemover
}