var howManyCaps = function(str){
	var caps = 0, str2 = [];
	for(var i =0; i< str.length;i++){
		if(str[i] === str[i].toUpperCase() && str[i] !== ' '){
			str2.push(str[i])
			caps++;
		}
	}
	return 'There are ' +caps+ ' capitals and these are ' +str2
}


module.exports = {
    howManyCaps
}