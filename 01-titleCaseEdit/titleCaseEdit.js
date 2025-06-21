function titleCaseEdit(title) {
  const letters = title.split("");
  let isUpperCase = true;
  for (let i = 0; i < letters.length; i++) {
    if (isUpperCase) {
      letters[i] = letters[i].toUpperCase();
      isUpperCase = false;
    } else if (letters[i] == " ") {
      isUpperCase = true;
    }
  }
  return letters.join("");
}

// Do not edit this line;
module.exports = titleCaseEdit;
