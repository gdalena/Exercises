var arr = [1,2,3,'4','5', {}, 33]

function numberConverter(arr) {
	var converted = [];
	var not_converted = [];
	var res = [];
	var count = 0;
	arr.forEach(function(ele){
		if(Number(ele)){
			count++ 
		}
		if((!isNaN(Number(ele))) && (typeof ele !== 'number')) {
			converted.push(Number(ele)) 
		} else if(isNaN(Number(ele))){
			not_converted.push(ele)
		}
		
		if(not_converted == 0){
			res =  'no need for conversion'
		} else if(converted[0] == 0){
			converted.splice(0,1)
			res =  `${count} were converted to numbers  ${converted} ${not_converted.length} couldn\'t be converted`
		} else if(converted[0] != 0){
			res =  `${count} were converted to numbers  ${converted} ${not_converted.length} couldn\'t be converted`
		}
})
return res
}

module.exports ={
    numberConverter
}