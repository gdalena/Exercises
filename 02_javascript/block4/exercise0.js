
function isTrue(arr){
if (arr == [ ] || arr == undefined || arr == false || arr== null || arr == 0) { 
	return false
} else {
	return true
}
}

module.exports = {
    isTrue
}