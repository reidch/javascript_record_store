var assert = require("assert");
var Store = require("../store.js")
var Record = require("../record.js");

describe("Store", function(){
	var store, record1, record2, record3, record4, record5, record6, record6, record7, record8, record9, record10;

	beforeEach(function(){
		store = new Store("Fopp", "Glasgow", "inventory", 1000);
		record1 = new Record("American Dream", "LCD Soundsystem", "electro-disco-rock", 8);
		record2 = new Record("Utopia", "Bjork", "alternative", 10);
		record3 = new Record("This Is Happening", "LCD Soundsystem", "electro-disco-rock", 9);
		record4 = new Record("Symphonic Poems", "Saint-Saens", "classical", 8);
		record5 = new Record("Eulogy for Evolution", "Olafur Arnalds", "classical", 7);
		record6 = new Record("Solo Piano", "Philip Glass", "classical", 10);
		record7 = new Record("OK Computer", "Radiohead", "alternative", 8);
		record8 = new Record("Debut", "Bjork", "electronic", 8);
		record9 = new Record("Joao Voz E Violao", "Joao Gilberto", "brazilian", 8);
		record10 = new Record("Sleep Remixes", "Max Richter", "classical", 8);

		addRecords();
	});

		var addRecords = function(){
			store.addRecord(record1);
			store.addRecord(record2);
			store.addRecord(record3);
			store.addRecord(record4);
			store.addRecord(record5);
			store.addRecord(record6);
			store.addRecord(record7);
			store.addRecord(record8);
			store.addRecord(record9);
			store.addRecord(record10);
		};

	xit("should have a name", function(){
		assert.strictEqual(store.name, "Fopp");
	});

	xit("should have a location", function(){
		assert.strictEqual(store.city, "Glasgow");
	});

	xit("should have an inventory", function(){
		assert.strictEqual(store.inventory, [inventory]);
	});

	xit("should have a balance", function(){
		assert.strictEqual(store.balance, 1000);
	});

	xit("should be able to add records to the inventory", function(){
		assert.strictEqual(store.records.length, 10);
	});

	xit("should be able to list the inventory", function(){
		assert.strictEqual(store.listInventory, [inventory]);
	});

	xit("should be able to sell a record and adjust the balance accordingly", function(){
		store.sellRecord(record1);
		assert.strictEqual(store.balance, 1008);
	});

	xit("should be able to report financial situation", function(){
		assert.strictEqual(store.financial, 1084);
	});

	xit("should be able to view all records of a given genre", function(){
		var classicalList = store.listInventory("classical");
		assert.strictEqual(classicalList, [inventory.classical]);
	});
});
