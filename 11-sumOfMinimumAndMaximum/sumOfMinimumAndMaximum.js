function sumOfMinimumAndMaximum(nums) {
  let min,
    max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else {
      min = nums[i];
    }
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
