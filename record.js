var _ = require("lodash");

var Record = function(title, artist, genre, price){
	this.title = title;
	this.artist = artist;
	this.genre = genre;
	this.price = price;
};

Record.prototype = {



};

module.exports = Record;
