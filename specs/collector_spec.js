var assert = require("assert");
var Collector = require("../collector.js")
var Record = require("../record.js");

describe("Collector", function(){
	var collector, record6, record7, record8;

	beforeEach(function(){
		collector = new Collector("Graham Banks", 50);
		record6 = new Record("Solo Piano", "Philip Glass", "classical", 10);
		record7 = new Record("OK Computer", "Radiohead", "alternative", 8);
		record8 = new Record("Debut", "Bjork", "electronic", 8);

		buyRecords();
	});

	var buyRecords = function(){
		collector.buyRecord(record6);
		collector.buyRecord(record7);
		collector.buyRecord(record8);
	}

	it("should have a name", function(){
		assert.strictEqual(collector.name, "Graham Banks");
	});

	it("should be able to buy records", function(){
		assert.strictEqual(collector.collection.length, 3);
	});

	it("should have cash", function(){
		assert.strictEqual(collector.cash, 50);
	});

	xit("should have cash that decreases with buying", function(){
		collector.buyRecords();
		assert.strictEqual(collector.cash, 24);
	});

	xit("should be able to sell records", function(){
		collector.sellRecord(record6);
		assert.strictEqual(collector.collection.length, 2);
	});

	xit("should have cash that increases with selling", function(){
		collector.sellRecord(record6);
		assert.strictEqual(collector.cash, 60);
	});

	xit("shouldn't be able to buy if funds insufficient", function(){
		collector.cash = 5;
		collector.buyRecord(record8);
    // check the length doesn't increase if insufficient funds
		assert.strictEqual(collector.collection.length, 3);
	});

	xit("should be able to view total value", function(){
		assert.strictEqual(collector.collection.price, 26);
    // has to access the price of each record in collection
	});

	xit("should be able to view all records of a given genre", function(){
		var classicalList = collector.listCollection("classical");
		assert.strictEqual(classicalList, [collection.classical]);
	});

	it("should be able to view most valuable record", function(){
		var mostValuable = collector.findMostValuableRecord();
		assert.strictEqual(mostValuable, record6);
	});

	xit("should be able to sort records by value, ascending order", function(){
		assert.strictEqual(collector.collection.price, [record7, record8, record6]);
		// has to access the price of each record in collection
	});

	xit("should be able to compare value of collection with another collector", function(){
		assert.strictEqual(collector.collection.price, [record7, record8, record6]);
		// has to access the price of each record in collection
    // need to create another collector
	});
});
