function countOfAllBooleansAndStrings(arr) {
  let boolOrStringCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean" || typeof arr[i] === "string")
      boolOrStringCount++;
  }
  return boolOrStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
