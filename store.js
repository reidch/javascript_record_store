var _ = require("lodash");

var Store = function(name, location, balance){
	this.name = name;
	this.location = location;
	this.balance = balance;
	this.inventory = [];
};

Store.prototype = {
	addRecord: function(record){
		this.inventory.push(record);
	},

	sellRecord: function(record){
    this.balance += record.price;
    return _.remove(this.inventory, record);
  },

	getFinancialOverview: function(){
		var stock = _.sumBy(this.inventory, "price");
		return "The balance is £" + this.balance + " and the inventory is valued at £" + stock;
	},

	findRecordsByGenre: function(genre){
		return _.find(this.inventory, {genre: genre});
	}
};

module.exports = Store;
