var arr = [ 
            10, 44, 55 ,66 , 77 , 55 , 44 ,
            3 , 3 , 3 , 4 , 5 , 6 , 54 , 
            "antonello", "33", "£", "66"
]
var max = 44

function uniqueElements(arr){
    var unique_array = []
    for(i = 0;i < arr.length; i++){
        if((unique_array.includes(arr[i]) != true) && (typeof arr[i] === 'number') && (arr[i] >= max)){
            unique_array.push(arr[i])
        }
    }
    return ('old array ' + String(arr) + ' \n new array ' + String(unique_array))
}

module.exports = {
    uniqueElements
}