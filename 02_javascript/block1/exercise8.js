var age = 2018 - 1989
var minAge = 15
var checkAge = function (age, minAge){
    return (age > minAge) == 1
}

module.exports = {
    checkAge,
    age,
    minAge
}