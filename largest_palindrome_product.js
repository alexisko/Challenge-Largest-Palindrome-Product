/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var palindromeArr = [];
  var result = 0;

  var numPlaces = [9, 99, 999, 9999, 99999];
  var max = numPlaces[digits-1];

  for(var i = 0; i <= max; i++) {
    for(var j = 0; j <= max; j++) {
      result = i * j;
      palindromeArr = result.toString().split("");
      if(palindromeArr.join("") === palindromeArr.reverse().join("")) {
        if(parseInt(palindromeArr.join("")) > palindromeNumber) {
          palindromeNumber = parseInt(palindromeArr.join(""));
          factor_0 = i;
          factor_1 = j;
        }
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};