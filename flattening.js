// Function that makes one array out of many smaller arrays

let arrayCollection = [[1, 2, 3], [4, 5], [6, 7], [8, 9, 10]];

console.log(arrayCollection.reduce((flat, current) => flat.concat(current), []));
// -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
