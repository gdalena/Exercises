var celsius = 102
var fahrenheit = 0
var toCelsius = function (fahrenheit){
    var total= (((fahrenheit - 32) * 5) / 9)
    return Math.round(total)

    
}
var toFahr = function (celsius){
    return Math.round((((celsius * 9) / 5 ) + 32))

}

module.exports = {
    celsius, 
    fahrenheit, 
    toCelsius, 
    toFahr,
}