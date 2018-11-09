
var bankAccount = {};

	bankAccount.withdraw = function(amount) {
		bankAccount['total'] -= amount;	
		}

	bankAccount.deposit = function(amount) {
		bankAccount['total'] += amount;
	}

	bankAccount.balance = function() {
		return bankAccount.total;
	}
	bankAccount.total = 0;


module.exports = {
    bankAccount
}