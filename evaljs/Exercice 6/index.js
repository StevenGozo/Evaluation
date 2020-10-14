'use strict'

/**
 * Exercice 6
 */

/**
 * Check Phone Number
 * @param {String} phoneNumber
 * @return {boolean} isValid
 */

 var checkPhoneNumber = function checkPhoneNumber(phoneNumber) {
 	if (!phoneNumber.search(/(01|06|07)[0-9]{8}/g)) {
		return true;
	}

	return false;
 }

 console.log(checkPhoneNumber('0678254632'));
 console.log(checkPhoneNumber('1021102'));
 console.log(checkPhoneNumber('0735143588'));
 console.log(checkPhoneNumber('064255445123148'));
 console.log(checkPhoneNumber('0125672357'));

