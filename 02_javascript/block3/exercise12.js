var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'

/*function reverser(str) {
	var str2 = str.split("")
	var str3 = str2.reverse("")
	var str4 = str3.join("")
	return str4
}
*/
const reverser = str => {
    let arr= [];
    for (let i = str.length; i>=0; i--){
        arr.push(str[i]);
    };
    return arr.join('');
};

module.exports = {
    reverser
}

