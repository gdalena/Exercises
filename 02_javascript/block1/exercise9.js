    var name = "M"
	var birth_year = 1965
	var now = 2000
    var getAge  = function (birth_year, now, name) {
    	
        return ("Hello " + name + " you are " + (now - birth_year) + " years old")
        
    }

    module.exports = {
        name, birth_year, getAge
    }