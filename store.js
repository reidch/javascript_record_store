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

	findRecordsByGenre: function(genre){
		return _.find(this.inventory, {genre: genre});
	},

	// listInventory: function(){
	// 	return this.inventory;
	// }

// doesn't work yet
	// getFinancialSituation: function(){
	// 	var assets = _.filter(this.inventory, {price: price});
	// 	return _.sumBy(assets, "price") += this.balance;
	// }
};

module.exports = Store;
