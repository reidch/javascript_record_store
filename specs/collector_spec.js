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
		// collector.buyRecord(record5);
		// collector.buyRecord(record6);
		// collector.buyRecord(record7);
		// collector.buyRecord(record8);
	}

	it("should have a name", function(){
		assert.strictEqual(collector.name, "Graham Banks");
	});

	it("should be able to buy records", function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
		assert.strictEqual(collector.collection.length, 4);
	});

	it("should have cash", function(){
		assert.strictEqual(collector.cash, 50);
	});

	it("should have cash that decreases with buying", function(){
		collector.cash = 50;
		collector.buyRecord(record5);
		assert.strictEqual(collector.cash, 43);
	});

	it("should be able to sell records", function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
		collector.sellRecord(record6);
		assert.strictEqual(collector.collection.length, 3);
	});

	it("should have cash that increases with selling", function(){
		collector.sellRecord(record6);
		assert.strictEqual(collector.cash, 60);
	});

	it("shouldn't be able to buy if funds insufficient", function(){
		collector.cash = 5;
		collector.buyRecord(record8);
// checking the size of the array doesn't increase if insufficient funds
		assert.strictEqual(collector.collection.length, 0);
	});

	it("should be able to view total value", function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
		var totalValue = collector.getTotalValue();
		assert.strictEqual(totalValue, 33);
	});

	it("should be able to view the value of all records of a given genre", function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
		var genreValue = collector.getTotalValue("classical");
		assert.strictEqual(genreValue, 17);
	});

	it("should be able to view most valuable record", function(){
		collector.buyRecord(record5);
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
		var mostValuable = collector.findMostValuableRecord();
		assert.deepStrictEqual(mostValuable, record6);
	});

// doesn't work yet
	xit("should be able to sort records by value, ascending order", function(){
		assert.strictEqual(collector.collection.price, [record7, record8, record6]);
		// has to access the price of each record in collection
	});

// doesn't work yet
	xit("should be able to compare value of collection with another collector", function(){
		assert.strictEqual(collector.collection.price, [record7, record8, record6]);
		// has to access the price of each record in collection
    // need to create another collector
	});
});
