var assert = require("assert");
var Record = require("../record.js");

describe("Record", function(){
	var record;

	beforeEach(function(){
		record = new Record("American Dream", "LCD Soundsystem", "electro-disco-rock", 8);
	});

	xit("should have a title", function(){
		assert.strictEqual(record.title, "American Dream");
	});

	xit("should have an artist", function(){
		assert.strictEqual(record.artist, "LCD Soundsystem");
	});

	xit("should have a genre", function(){
		assert.strictEqual(record.genre, "electro-disco-rock");
	});

	xit("should have a price", function(){
		assert.strictEqual(record.price, 9);
	});

	xit("should print out the record's properties as a string", function(){
		assert.strictEqual(record.details, "American Dream by LCD Soundsystem, genre: electro-disco-rock, price: £8");
	});
});
