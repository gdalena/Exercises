var str = 'hello, how are you today? I am not bad and you?'

function checker(str) {
	var result = [], count= 0, count2=0;
	for(i=0; i < str.length; i++){
		if(str[i] ==='?') count2++;
		else if(str[i] ===',') count++;
	}
	if(count > 1 && count2 > 1 ) {
		return count+ ' ' +'commas'+ ' ' +count2+ ' ' +'question marks'		
	} else if(count <= 1 && count2 <=1 ) {
		return count + ' ' +'comma'+ ' ' +count2 + ' ' + 'question mark'
	} else if(count > 1 && count2 <=1 ) {
		return count + ' ' + 'commas' + ' ' + count2 + ' ' + 'question mark'
	} else if(count <= 1 && count2 > 1 ) {
		return count+ ' ' + 'comma'+ ' ' +count2 + ' ' + 'question marks'
	}
}

module.exports = {
    checker
}





