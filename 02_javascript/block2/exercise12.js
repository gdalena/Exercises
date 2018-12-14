var arr = ['green','red','black','blue','brown','yellow','purple']

function isThere(arr, str) {
	return arr.includes(str) !== 1
}
module.exports ={
    arr, isThere
}