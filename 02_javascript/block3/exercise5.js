var arr = ['magdalena' ,1, 'jenny',2, 'darren',3, 'I travel a lot',4, 'mike', null]


function isString(arr,b){
	var newArray = []
	arr.forEach(function(ele,b) {
		if (typeof (ele) == 'string') {
				newArray.push(ele);
			}
	} ) 
	return newArray 
} 

module.exports = {
    isString
} 