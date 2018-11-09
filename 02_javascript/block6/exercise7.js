/* var obj = {start: 20, end: 26, step: 3}


function runOnRange(obj) {
	var arr = []; 
	var result = [];
	var num = 0;
	var num2 = 0;
	var start1 = 0;
	var end1 = 0;
	var step1 = 0;
	for(var key in obj){
		if(key == 'start'){
			start1 = obj[key]
		} 
		if(key == 'end'){
			end1 = obj[key]
		}
		if(key == 'step'){
			step1 = obj[key]
		}
	}
	if(end1>start1){
		num = start1+step1;
	} else {
		num = start1 - step1
	}
	if((step1 < 0) || (step1 = 0)){
		arr = [];
	} else {
		arr.push(start1);
		arr.push(num);
		arr.push(end1)
	}
debugger
	return arr
}*/
/*function runOnRange(obj) {
	var arr = []; start1 = 0; star2 = 0; end1 = 0; end2 = 0;

	for(var key in obj){
		if(key == 'start'){
			start1 = obj[key]
		} 
		if(key == 'end'){
			end1 = obj.end
		}
		if(key == 'step') {
			if(obj[key] == 0){ 
			} 
		} else  if((key == 'start') && (key == 'end')) {
			if(start1 - end1 == 1) {
				arr = []
			} else if(start1 - end1 == -1) {
				arr = []				
			} 
		} else if(key == 'step') {
			if(obj[key] > 0){
			arr.push(obj.start )
			}
		}else if(key == 'step') {
			if(obj[key] < 0) {
			
			
			}
		}

debugger			
	}
	
	return arr
}*/
/*function runOnRange(obj) {
	var arr = [];
	var start = 0;
	var end = 0;
	var step = 0;
	for(var key in obj) {
		if(key =='step'){
			var step = obj[key]
		}
		if(key == 'start'){
			var start =obj[key]
		}
		if(key == 'end'){
			var end = obj[key]
		}
	}
	if(step == 0){
		arr = []
	} else {
		if(end > start){
			for(i=start; i<= end; i+step){
				arr.push(i)
			}
		} else {
			for(i=start; i<= end; i-step){
				arr.push(i)
			}
		}
	}
	return arr
}*/
module.exports = {
    runOnRange
}