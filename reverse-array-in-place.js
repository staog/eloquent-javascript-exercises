// This function is reversing array in place by changing places of elements in pair until for loop reaches the middle of array

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let storingOriginalValue = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = storingOriginalValue;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// -> [5, 4, 3, 2, 1]
