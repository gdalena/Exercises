
var bankAccount = {};


function bankAccount(depisit, withdraw,balance) {

	bankAccount.withdraw = function(amount) {
		bankAccount[total] -= amount	
		}

	bankAccount.deposit = function(amount) {
		bankAccount[total] += amount	
	}

	bankAccount.balance = function() {
		bankAccount[total] = deposit() - withdraw()
	}

	return bankAccount.balance()
}

module.exports = {
    bankAccount
}