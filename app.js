// function divideName(array) {
//   let result = array.split(' ');
// console.log(result);
// result.forEach((element) => {
//   result.push(element);
//   console.log(element);
// });
//   let count = 0;
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);

//     if (result[i].length > count) {
//       count = result[i].length;
//     }
//     return count;
//   }
//   console.log(count);
//   return count;
// }
// let name = [2, 'hello', 3];

// console.log('slice, splice and split');

// console.log(divideName('how are u doing'));
// console.log('asasas');

// Write a function formatNumber

// formatNumber has one parameter n, a number

// formatNumber should return the number formatted as a readable string, inserting a comma (",") as a thousands separator. If the number n is an integer, add .0 to the formatted string, otherwise, print the decimals as they are.

// Example:

function formatNumber(n) {
  console.log(n.toString().length);

  let string = n.toString().split('');

  string.forEach((element) => {
    console.log(element);
  });
  if (Number.isInteger(n)) {
    return n + '.0';
  }
}
var int = 10;

console.log(formatNumber(2)); //Expected "2.0" PASSED
console.log(formatNumber(1130.34));
formatNumber(1000.23); //Expected "1,000.23"

formatNumber(23082342.3285); //Expected 23,082,342.3285
