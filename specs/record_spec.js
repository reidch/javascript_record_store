var assert = require("assert");
var Record = require("../record.js");

describe("Record", function(){
	var record;

	beforeEach(function(){
		record = new Record("American Dream", "LCD Soundsystem", "electro-disco-rock", 8);
	});

	it("should have a title", function(){
		assert.strictEqual(record.title, "American Dream");
	});

	it("should have an artist", function(){
		assert.strictEqual(record.artist, "LCD Soundsystem");
	});

	it("should have a genre", function(){
		assert.strictEqual(record.genre, "electro-disco-rock");
	});

	it("should have a price", function(){
		assert.strictEqual(record.price, 8);
	});

	it("should print out the record's properties as a string", function(){
		assert.strictEqual(record.printDetails(), "American Dream by LCD Soundsystem, genre: electro-disco-rock, price: £8");
	});
});
