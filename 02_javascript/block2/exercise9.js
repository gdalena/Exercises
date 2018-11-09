var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

function concatenator(arr) {
	var arr2 = [] 
	var arr3 = arr2.concat(arr) 
	return String(arr3) 
}

module.exports = {
    concatenator,
    arr
}