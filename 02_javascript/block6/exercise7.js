var obj = {start: 20, end: 26, step: 3}
/*const runOnRange = obj => {
    const arr = [];
    let { start, end, step } = obj;
	if (!step) return arr;
	if (start > end && step < 1) {
	 	for (let i = start; i >= end; i+=step){
        	arr.push(i);
    	};
    };
    for (let i = start; i <= end; i+=step){
        arr.push(i);
    };
    return arr;
};*/

function runOnRange(obj) {
	var arr = [];
	var num = 0, end2 = 0;
	var {end} = obj;
	var {start} = obj;
	var {step} = obj;
	if((end>start) && (step === 0) && (start !== 0)) {
		arr = '';
	
	} else if((end>start) && (step > 0) && start !== 0){
		num = start+step;
		arr.push(start);
		arr.push(num);
		arr.push(end);
		
	} else if((end>start) && (step > 0) && start === 0){
		num = start + step
		end2 = num + step
		arr.push(start);
		arr.push(num);
		arr.push(end2);
	} else if((end < start) && (step <0)){
		num = start + step
		arr.push(start);
		arr.push(num);
		arr.push(end);	
	}
return arr
}
module.exports = {
    runOnRange
}