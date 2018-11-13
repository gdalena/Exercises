var bankAccount = {};
var total = 0, amount = 0;

var  BankAccount = function (amount) {
	total = amount
	this.deposit = function(amount) {
		total += amount;
	}
	this.withdraw = function(amount) {
		total -= amount;	
		}

	this.balance = function() {
		return total 
	}

}

module.exports = {
    BankAccount
}

