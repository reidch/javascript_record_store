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

	// sellRecord: function(record){
	// 	this.collection.splice(record);
	// },

	// sellRecord: function(price){
	// 	this.cash += price;
	// },
  //
	// buyRecord: function(price){
	// 	this.cash -= price;
	// },

	getTotalValue: function(genre){
		if(genre){
			var collection = _.filter(this.collection, {genre: genre});
			return _.sumBy(collection, "price");
		}else{
			return _.sumBy(this.collection, "price");
		}
	},

	findMostValuableRecord: function(){
		return _.maxBy(this.collection, "price");
	},
};

module.exports = Collector;
