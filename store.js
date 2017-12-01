var _ = require("lodash");

var Store = function(name, location, balance){
	this.name = name;
	this.location = location;
	this.balance = balance;
	this.inventory = [];
};

Store.prototype = {

};

module.exports = Store;
