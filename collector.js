var _ = require("lodash");

var Collector = function(name, cash){
	this.name = name;
	this.cash = cash;
	this.collection = [];
};

Collector.prototype = {

};

module.exports = Collector;
