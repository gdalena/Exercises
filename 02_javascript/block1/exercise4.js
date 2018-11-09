var age = 29
var end_age = 100
var teas_day = 4 

var howManyTeas = function(age, end_age, teas_day){
    return (end_age - age) * 365 * teas_day
}

module.exports = {
    howManyTeas,
    age,
    end_age,
    teas_day
}