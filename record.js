var _ = require("lodash");

var Record = function(title, artist, genre, price){
	this.title = title;
	this.artist = artist;
	this.genre = genre;
	this.price = price;
};

Record.prototype = {
	printDetails: function(){
		return this.title + " by " + this.artist + ", genre: " + this.genre + ", price: £" + this.price;
	}
};

module.exports = Record;
