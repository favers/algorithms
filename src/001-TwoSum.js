function twoSum(nums, target) {
    let arr = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let tmp = target - nums[i];
        if (arr[tmp] != null) return [arr[tmp], i];
        arr[nums[i]] = i;
    }
}

module.exports = twoSum;