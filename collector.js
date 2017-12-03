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

	// buy: function(record){
  //   if(this.cash > record.price){
  //     this.records.push(record)
  //     this.cash -= record.price
  //   }
  //   return "You can't afford this!"
  // },
  sellRecord: function(record){
    // this.cash += record.price
    return _.remove(this.collection, record)
  },

	// sellRecord: function(price){
	// 	this.cash += price;
	// },
  //
	// buyRecord: function(record){
	// 	var cash = _.subtract(this.cash, "price")
	// 	return cash;
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
