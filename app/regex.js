exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var numbers = /\d/;
    if (numbers.test(str)){
      return true;
    }
    else {
      return false;
    }
  },

  containsRepeatingLetter : function(str) {
    var regex = /(\D)\1{1,}/;
    console.log(str);
    if (regex.test(str)){
      return true;
    }
    else {
      return false;
    }
  },

  endsWithVowel : function(str) {
    var regex = /[aeiouAEIOU]$/;
    console.log(str);
    if (regex.test(str)){
      return true;
    }
    else {
      return false;
    }
  },

  captureThreeNumbers : function(str) {
    var regex = /(\d){3}/;
    console.log(str);
    if (regex.test(str)){
      return regex.exec(str)[0];
    }
    else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    console.log(str);
    if (regex.test(str)){
      return true;
    }
    else {
      return false;
    }
  },

  isUSD : function(str) {
    var regex = /^[$](\d{1,3}([,]\d{3})*)+(([.]\d{2}$)|$)/;
    console.log(str);
    if (regex.test(str)){
      return true;
    }
    else {
      return false;
    }
  }
};
