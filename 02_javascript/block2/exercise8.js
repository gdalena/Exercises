var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office'];

var take_and_push = function(arr, index, index2) {
		var arr2 = []
		arr2.push(arr[index]);
		arr2.push(arr[index2]) 
	return String(arr2)
}

module.exports = {
    arr, take_and_push
}