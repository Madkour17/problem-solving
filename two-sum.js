function twoSum(nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (y = 0; y < nums.length; y++) {
            if (x !== y && (nums[x] + nums[y] === target)) {
                return [x, y]
            }
        }
    }
};

