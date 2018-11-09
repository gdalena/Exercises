var arr = ['one','two','three','four']

function looper(arr) {
	var count = 0
	arr.forEach(function(a,b,c) {
		console.log(a,b)
		count++
	})
	return count
}

module.exports = { 
    looper, arr
}