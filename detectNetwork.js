// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  var prefix = cardNumber.slice(0,2);
  var prefixMed = cardNumber.slice(0,3);
  var prefixLong = cardNumber.slice(0,4);
  var prefixXL = cardNumber.slice(0,6);
  var cardLength = cardNumber.length;

  if ((prefix === '38' || prefix === '39') && (cardLength === 14)) {
  	return 'Diner\'s Club';
  } else if ((prefix === '34' || prefix === '37') && (cardLength === 15)) {
  	return 'American Express';
  } else if ((prefix[0] === '4') && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
  	if ((prefixLong === '4903' || prefixLong === '4905' || prefixLong === '4911' || prefixLong === '4936') && (cardLength !== 13)) {
  		return 'Switch';
  	} else return 'Visa';
  } else if ((parseInt(cardNumber.slice(0,2)) >= 51 && parseInt(cardNumber.slice(0,2)) <= 55) && (cardLength === 16)) {
  	return 'MasterCard';
  } else if ((prefixLong === '6011' || prefixMed === '644' || prefixMed === '645' || prefixMed === '646' || prefixMed === '647' || prefixMed === '648' || prefixMed === '649' || prefix === '65') && (cardLength === 16 || cardLength === 19)) {
  	return 'Discover';
  } else if (( prefixLong === '5018' || prefixLong === '5020' || prefixLong === '5038' || prefixLong === '6304') && (cardLength >= 12 && cardLength <= 19)) {
  	return 'Maestro';
  } else if (((parseInt(cardNumber.slice(0,6)) >= 622126 && parseInt(cardNumber.slice(0,6)) <= 622925) || (parseInt(cardNumber.slice(0,3)) >= 624 && parseInt(cardNumber.slice(0,3)) <= 626) || (parseInt(cardNumber.slice(0,4)) >= 6282 && parseInt(cardNumber.slice(0,4)) <= 6288)) && (cardLength >= 16 && cardLength <= 19)) {
    return 'China UnionPay';
  } else if ((prefixLong === '4903' || prefixLong === '4905' || prefixLong === '4911' || prefixLong === '4936' || prefixLong === '6333' || prefixLong === '6759' || prefixXL === '564182' || prefixXL === '633110') && (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
  	return 'Switch';
  }


  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


