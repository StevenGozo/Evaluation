'use strict'

/**
 * Exercice 2
 */

/**
 * Grid Generator
 * @param {number} xAxis
 * @param {number} yAxis
 * @return {array} matrice
 */

var drawBar = function drawBar(sun, nbr) {
  this.sun = sun;
  this.nbr = nbr;
};

drawBar.prototype.bar = function () {
  var progress = document.createElement("progress");
  progress.value = this.nbr;
  progress.max = this.sun;
  progress.style.fontSize = "45px";
  document.body.appendChild(progress);
};

function level() {
  return Math.round(math.random() * (10 - 100) + 10);
}

var tab = new drawBar(300, 30);
tab.bar();