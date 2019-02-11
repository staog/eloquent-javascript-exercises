var size = 8;
var chessBoard = "";

for (var col = 0; col < size; col++) {
  for (var row = 0; row < size; row++) {
    if ((row + col) % 2 != 0) {
      chessBoard += "#";
    } else {
      chessBoard += " ";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);
