var _ = require("lodash");

var Collector = function(name, cash){
	this.name = name;
	this.cash = cash;
	this.collection = [];
};

Collector.prototype = {
	buyRecord: function(record){
		if(this.cash >= record.price){
			this.collection.push(record);
			this.cash -= record.price;
		}
		return "Insufficient funds. Pick something cheaper.";
	},

  sellRecord: function(record){
    this.cash += record.price;
    return _.remove(this.collection, record);
  },

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
