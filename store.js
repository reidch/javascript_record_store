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

	findRecordsByGenre: function(genre) {
			return _.find(this.inventory, {genre: genre});
		},
};

module.exports = Store;
