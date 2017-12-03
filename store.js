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

	getFinancialSituation: function(){
		var capital = _.sumBy(this.inventory, "price");
		return capital += this.balance;
	},

	findRecordsByGenre: function(genre){
		return _.find(this.inventory, {genre: genre});
	}
};

module.exports = Store;
