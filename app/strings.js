exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var unique = [];
    var multiples = '';
    for (i = 0; i < str.length; i++){
      var count = 0;
      for (x = 0; x < str.length; x++){
        if (str[i] == str[x]){
          count++;
        }
      }
      if (count >= 2 && str[i] != unique[unique.length-1]) {
        unique.push(str[i]);
      }
      else if (count = 1 && str[i] != unique[unique.length-1]){
        multiples = multiples.concat(str[i]);
      }
    };
    for (var x = 0; x < unique.length; x++){
      for (var y = 0; y < amount; y++) {
        multiples = multiples.concat(unique[x]);
      };
    };
    return multiples;
  },
  wordWrap: function(str, cols) {
    var split_str = str.split(' ');
    var new_str = '';
    var current_line = split_str[0];

    for (var i = 1; i < split_str.length; i++) {
      if ((current_line + ' ' + split_str[i]).length > cols) {
        new_str += (current_line + '\n');
        current_line = split_str[i];
      }
      else {
        current_line += (' ' + split_str[i]);
      }
    }
    new_str += current_line;
    return new_str;
  },
  reverseString: function(str) {
    return (str.split('').reverse().join(''))
  }
};
