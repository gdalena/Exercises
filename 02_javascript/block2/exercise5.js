var arr = ['car','soap','banana','tv','toothbrush']

function removeFirstAndLast(arr) {
	arr.splice(0,1)
	arr.pop()
	return String(arr)
}
module.exports = {
    arr, removeFirstAndLast
}