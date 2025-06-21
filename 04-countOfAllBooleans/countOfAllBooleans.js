function countOfAllBooleans(arr) {
  let boolCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") boolCount++;
  }
  return boolCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
