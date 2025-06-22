function fizzBuzz(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    let string = "";
    if (i % 3 == 0) string += "Fizz";
    if (i % 5 == 0) string += "Buzz";
    if (string.length > 0) {
      arr.push(string);
    } else arr.push(i);
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
