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

	findMostValuableRecord: function(){
		return _.maxBy(this.collection, "price");
	},
};

module.exports = Collector;
