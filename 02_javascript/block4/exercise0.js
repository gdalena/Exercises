
function isTrue(arr){
if (arr == [ ] || arr == undefined || arr == false || arr== null || arr == 0) { 
	return false
} else {
	return true
}
}

/*const isTrue = val => val ? true : false;*/

module.exports = {
    isTrue
}