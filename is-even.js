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
