exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    var boolean = null;
    var k = 2;
    while (boolean == null) {
      if (k >= num) {
        boolean = true;
        break;
      }
      else if (num % k == 0 ){
        boolean = false;
        break;
      }
      else {
        k++;
      }
    }
    return boolean;
  },

  arraySum : function(array) {
    for (var s = 0, i = 0; i < array.length; i++){
      s += array[i];
    }
    return s;
  },

  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if (typeof num != 'undefined' && typeof num == 'number'){
      if (num % 15 == 0) {
        return 'fizzbuzz';
      }
      else if (num % 3 == 0) {
        return 'fizz';
      }
      else if (num % 5 == 0 ){
        return 'buzz';
      }
      else {
        return num;
      }
    }
    else {
      return false;
    }
  }
};
