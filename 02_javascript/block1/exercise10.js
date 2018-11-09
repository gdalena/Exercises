var now = 2020
var dob = 1989
var howManyDays = function (dob, now){

    return ("you have lived for " + ((now - dob)*365) + " days already!")
}
module.exports = {
    now, dob, howManyDays
}