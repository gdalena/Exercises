var index = 0;
var index2 = 8;
var str = 'Antonello';
var str2 = []

function strCut(str, index, index2) {
	index2 -=1 
	str = str.split('')
if(index >= -1 || index2 >= -1) {
   		str.splice(index,1) && str.splice(index2,1)
   		str = str.join('') 
  } else if (!index || !index2) {
	str = str.join('')
}

 return str
}

module.exports = {
    strCut
}