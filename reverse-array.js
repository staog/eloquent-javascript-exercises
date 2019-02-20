// This function takes an array as argument and produces a new array that has the same elements in the inverse order.
// The point of this exercise is not to use reverse method on the array

var reverseArray = function (arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// -> [5, 4, 3, 2, 1]
