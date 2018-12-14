var originalArray = ['mike','jason','peter','robert','mike','jason','jenny','jane']

function uniqueElements(originalArray){
    var unique_array = [];
    for(i = 0;i < originalArray.length; i++){
        if(unique_array.includes(originalArray[i]) != true){
            unique_array.push(originalArray[i])
        }
    }
    return ('old array ' + String(originalArray) + ' \n new array ' + String(unique_array))
}


module.exports = {
    uniqueElements
}