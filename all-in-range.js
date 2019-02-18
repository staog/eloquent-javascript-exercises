// This function returns all numbers in range from x to (and including) y

var allInRange = function(x, y) {
  var arr = [];
  for (var i = x; i <= y; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(allInRange(1, 10));

// This function takes array as an argument and returns sum of all numbers in that array

var sumAllNumbers = function(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  }
  return counter;
}

console.log(sumAllNumbers(allInRange(1, 10)));
