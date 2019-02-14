var countChar = function (string, char) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
}

countChar("this is a string", "s");
