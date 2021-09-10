var containsDuplicate = function (nums) {
    let result = false
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            result = true
        }
    }
    return result
};