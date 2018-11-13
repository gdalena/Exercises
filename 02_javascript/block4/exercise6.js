var arr = [1,2,3,'4','5', {}, 33]

function numberConverter(arr) {
	var converted = [];
	var not_converted = [];
	var res = [];
	var count = 0, count2;
	arr.forEach(function(ele){
		if(Array.isArray(ele)){
			count2++
		} else {
		if(Number(ele)){
			count++ 
		}
		if((!isNaN(Number(ele))) && (typeof ele !== 'number') && (Array.isArray(ele) === false)) {
			converted.push(Number(ele)) 
		} else if(isNaN(Number(ele))){
			not_converted.push(ele)
		}
		
		if(not_converted == 0){
			res =  'no need for conversion'
		} else {
			res =  `${count} were converted to numbers  ${converted} ${not_converted.length} couldn\'t be converted`
		}
	}
})
return res
}

module.exports ={
    numberConverter
}