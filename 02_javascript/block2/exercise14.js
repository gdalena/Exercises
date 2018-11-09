var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

function isArrayFunc(arr) {
	if(Array.isArray(arr) == true) {
		return true
	} else if (Array.isArray(arr) != true
		) {
		return false}
	}
	

module.exports = {
    isArrayFunc
}
