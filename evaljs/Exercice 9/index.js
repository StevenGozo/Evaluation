'use strict';

/**
 * Check Palindrome
 * @constructor
 * @param {string} str - A character string.
 */

 var checkPalindrome = function checkPalindrome(str) {
    this.str = str;
 }

 checkPalindrome.prototype.isPalindrome = function() {
    var str = this.str;
    var clean =  (str) => str.toLowerCase().replace(/[\W_]/g, '');
    var cleanStr = clean(str);

    for(var i = 0; i < cleanStr.length / 2; i++){
        if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
             alert(cleanStr + ' is not a palindrome');
             return false;
        }
    }
    alert(cleanStr + ' is a palindrome');
    return true;
 }

 checkPalindrome.prototype.run = function() {
    this.isPalindrome();
 }

 var palindrome1 = new checkPalindrome('gag');
 palindrome1.run();
 var palindrome2 = new checkPalindrome('gaz');
 palindrome2.run();