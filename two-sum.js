// 1st method using 2 for loops O(n^2) Time
function twoSumUsing2ForLoops(nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (y = 0; y < nums.length; y++) {
      if (x !== y && nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
  return -1;
}

//2nd method using hash table O(n) Time
function twoSumUsingHashTable(nums, target) {
  const obj = {};
  for (let x = 0; x < nums.length; x++) {
    if (obj[target - nums[x]]) {
      return [x, obj[target - nums[x]]];
    }
    obj[nums[x]] = x;
  }
  return -1;
}
