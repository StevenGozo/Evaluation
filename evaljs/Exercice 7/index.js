'use strict'

/**
 * Exercice 7
 */

/**
 * Compute Notes
 * @param {number[]} notes
 * @return {number} average
 */ 

 var computeNotes = function computeNotes(notes) {
 	var grade = 0;
 	var average;

 	for(var i=0; i<notes.length; i++) {
 		grade += notes[i];
 	}
 return grade/notes.length;
}

console.log(computeNotes([10, 13, 13, 12, 15, 12, 11, 16, 14]));