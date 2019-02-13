// Solution for positive numbers only
// If number provided has negative value, you'll get this error: "InternalError: too much recursion[Learn More]"

var isEven = function(number) {
  if (number < 0) {
    return "Please, provide a positive number.";
  }
  if (number == 0) {
    return true;
  } else if (number == 1) {
      return false;
  } else {
      return isEven(number - 2);
  }
};

isEven(50);

// Solution for all numbers, positive or negative

/* var isEven = function(number) {
  if (number == 0) {
    return true;
  } else if (number == 1 || number == -1) {
      return false;
  } else if (number >= 2) {
      return isEven(number - 2);
  } else {
      return isEven(number + 2);
  }      
};

isEven(50); */
