var _ = require("lodash");

var Collector = function(name, cash){
	this.name = name;
	this.cash = cash;
	this.collection = [];
};

Collector.prototype = {
	buyRecord: function(record){
		this.collection.push(record);
	},

	getTotalValue: function(){
		// if(type){
		// 	var accounts = _.filter(this.accounts, {type: type});
		// 	return _.sumBy(accounts, 'balance');
		// }else{
			return _.sumBy(this.collection, "price");
	},

	// getTotalValue: function(type){
	// 	if(type){
	// 		var accounts = _.filter(this.accounts, {type: type});
	// 		return _.sumBy(accounts, 'balance');
	// 	}else{
	// 		return _.sumBy(this.accounts, 'balance');
	// 	}
	// },

	findMostValuableRecord: function(){
		return _.maxBy(this.collection, "price");
	},
};

module.exports = Collector;
