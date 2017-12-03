var assert = require("assert");
var Collector = require("../collector.js")
var Record = require("../record.js");

describe("Collector", function(){
	var collector, record6, record7, record8;

	beforeEach(function(){
		collector = new Collector("Graham Banks", 50);
		record5 = new Record("Eulogy for Evolution", "Olafur Arnalds", "classical", 7);
		record6 = new Record("Solo Piano", "Philip Glass", "classical", 10);
		record7 = new Record("OK Computer", "Radiohead", "alternative", 8);
		record8 = new Record("Debut", "Bjork", "electronic", 8);

		buyRecords();

	});

	var buyRecords = function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
	}

	it("should have a name", function(){
		assert.strictEqual(collector.name, "Graham Banks");
	});

	it("should be able to buy records", function(){
		assert.strictEqual(collector.collection.length, 4);
	});

	it("should have cash", function(){
		assert.strictEqual(collector.cash, 17);
	});

	it("should have cash that decreases with buying", function(){
		collector.cash = 50;
		collector.buyRecord(record5);
		assert.strictEqual(collector.cash, 43);
	});

	it("should be able to sell records", function(){
		collector.sellRecord(record6);
		assert.strictEqual(collector.collection.length, 3);
	});

	it("should have cash that increases with selling", function(){
		collector.sellRecord(record6);
		assert.strictEqual(collector.cash, 27);
	});

	it("shouldn't be able to buy if funds insufficient", function(){
		collector.cash = 5;
		collector.buyRecord(record8);
// checking the size of the array doesn't increase if insufficient funds
		assert.strictEqual(collector.collection.length, 4);
	});

	it("should be able to view total value", function(){
		var totalValue = collector.getTotalValue();
		assert.strictEqual(totalValue, 33);
	});

	it("should be able to view the value of all records of a given genre", function(){
		var genreValue = collector.getTotalValue("classical");
		assert.strictEqual(genreValue, 17);
	});

	it("should be able to view most valuable record", function(){
		var mostValuable = collector.findMostValuableRecord();
		assert.deepStrictEqual(mostValuable, record6);
	});

	it("should be able to sort records by value, ascending order", function(){
		var orderValue = collector.orderByValue();
		assert.deepStrictEqual(orderValue, [record5, record7, record8, record6]);
	});

// can't get this to work
	xit("should be able to compare value of collection with another collector");
});
