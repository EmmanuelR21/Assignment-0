function productOfAnyAmountOfNumbers(...args) {
  const arr = [...args];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
