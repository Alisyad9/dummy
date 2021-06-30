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

function formatNumber(n) {
  if (Number.isInteger(n)) {
    n += '.0';
  }
  let newstring = n.toString();
  let splitByDot = newstring.split('.');
  let leftNumber = splitByDot[0];

  let leftNumberarr = leftNumber.split('');
  let count = 0;

  for (let i = leftNumber.length; i > 0; --i) {
    count++;
    if (count % 3 === 0) {
      leftNumberarr.splice(leftNumber.length - count, 0, ',');
      console.log(count);
    }
  }
  return leftNumberarr.join('') + '.' + splitByDot[1];
}

// console.log(formatNumber(2)); //Expected "2.0" PASSED
// console.log(formatNumber(2123123.34));
console.log(formatNumber(5000000000)); //Expected "1,000.23"

//formatNumber(23082342.3285); //Expected 23,082,342.3285
// play with arrays

// function shout(words) {
//   console.log(words);
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     console.log(i);
//     word = words[i];
//     let uppercasseWord = word.toUpperCase();
//     result.push(uppercasseWord);
//   }

//   return result;
// }
// function shout2(words) {
//   let result = [];
//   for (let word of words) {
//     console.log(result.push(word));
//   }
// }

function shout3(words) {
  result = [];
  words.forEach((element) => {
    let uppercase = element.toUpperCase();
    result.push(uppercase);
  });
  return result;
}

function shout4(words) {
  // let result = [];
  return words.map((word) => {
    let uppercase = word.toUpperCase();
    // result.push(uppercase);
    // console.log(result);
    console.log(uppercase);
    return uppercase;
  });
}

shout4(['hello', 'world']);

function divisible2(number) {
  return number.filter((numb) => {
    return numb % 3 === 0;
  });
}
console.log(divisible2([1, 2, 3, 4, 5, 6, 9]));
