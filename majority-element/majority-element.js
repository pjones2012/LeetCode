/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) return nums[0];
    nums.sort();
    console.log(nums);
    var count = 1;
    var prev = nums[0];
    for (var i = 1; i< nums.length;i++){
        if (nums[i] === prev){
            count++;
        } else {
            if (count > nums.length/2) return prev;
            count = 1
            prev = nums[i];
        }
    }
    return prev;
};