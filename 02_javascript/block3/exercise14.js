var arr = [
        //monday
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'
        
]

var rate = 0.0089;
 var day = 7;

function budgetTracker(arr) {
    var dailyExpense = 0
    for(i=0; i<arr.length; i++) {
    var daily=  Number(arr[i])* rate;
    dailyExpense += daily
    }
    return Math.round(dailyExpense/day)
}

module.exports = {
    budgetTracker
}


module.exports = {
    budgetTracker
}
