exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var index = [];
    for (i = arr.length-1; i >= 0; i--){
      if (arr[i] == item){
        index.push(i);
      }
    };
    for (x = 0; x < index.length; x++) {
      arr.splice(index[x], 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    for (var count = 0, i = 0; i < arr.length; i++){
      if (arr[i] == item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    arr.sort();
    var duplicate = [];
    for (item = 0; item < arr.length; item++){
      var count = 0;
      for (x = 0; x < arr.length; x++){
        if (arr[item] == arr[x]){
          count++;
        }
      }
      if (count >= 2 && arr[item] != duplicate[duplicate.length-1]) {
        duplicate.push(arr[item]);
      }
    }
    return duplicate;
  },

  square : function(arr) {
    squared = [];
    for (i = 0; i < arr.length; i++){
      squared.push(arr[i]*arr[i])
    }
    return squared;
  },

  findAllOccurrences : function(arr, target) {
    var index = [];
    for (i = arr.length-1; i >= 0; i--){
      if (arr[i] == target){
        index.push(i);
      }
    };
    return index;
  }
};
