/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length <=1) return nums;
    for (var i = 0; i < nums.length-1; i++){
        //console.log(nums);
        //console.log(nums[i]);
        if(nums[i] > nums[i+1]){
            var hold = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = hold;
            i-=2;
            
        }
    }
};