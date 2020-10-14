'use strict'

/**
 * Exercice 1
 */

/**
 * Grid Generator
 * @param {number} xAxis
 * @param {number} yAxis
 * @return {array} matrice
 */

var gridGenerator = function gridGenerator(xAxis, yAxis) {
	this.xAxis = xAxis;
	this.yAxis = yAxis;
}

gridGenerator.prototype.run = function() {
 	console.log(this.table());
}

gridGenerator.prototype.matrix = function() {
 	var table = document.createElement("table");
 	for (var i = 0; i < this.xAxis; i++) {
 		var tr = document.createElement("tr");
 		for (var j = 0; j < this.yAxis; j++) {
 			var td = document.createElement("td");
 			tr.appendChild(td);
 		}
 		table.appendChild(tr);
 	}
 	document.body.appendChild(table)
}
var tab = new gridGenerator(4,5);
tab.matrix()