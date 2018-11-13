 Universe = {
 	matter : { total : 0 },
 	energy : { total : 0 }
 }
 var amount = 0, total = 0;

var Universe = function() {

 result = ` matter and universe total should be ${this.matter.total} if no initial value is added`
	
	this.matter = {total : 0, 
					create : function (amount) {
  						this.matter.total = this.matter.total + amount - this.energy.total
 					 },
					destroy : function (amount) {
  						this.matter.total = this.matter.total - amount + this.energy.total
 					}
				}

	this.energy = { total : 0, 
					create : function (amount) {
  						this.energy.total = this.energy.total + amount - this.matter.total
  					},
					destroy : function (amount) {
  						this.energy.total = this.energy.total - amount + this.matter.total
  					}
  				}	

  result = `matter total should be ${this.matter.total}, energy total should be ${this.energy.total}`	

return result

}

module.exports = {
    Universe
}