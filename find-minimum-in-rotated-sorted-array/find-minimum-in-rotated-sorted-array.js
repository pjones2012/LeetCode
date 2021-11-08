/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    if (nums.length === 1){
        return nums[0]
    }
    var maxIndex = 0;
    var left = 0;
    var right = nums.length-1;
    var mid = Math.floor((right-left)/2);
    while (left<=right){
        if(nums[mid-1]< nums[mid] && nums[mid+1] < nums[mid]) {
            maxIndex = mid;
            break;
        } else {
            if (nums[mid]>=nums[maxIndex]){
              maxIndex = mid;
              left = mid+1;  
            } else if (nums[mid]<nums[maxIndex]){
              right = mid-1;  
            }  
        }
        mid = Math.floor((right-left)/2)+left;
    } 
    var minIndex;
    if(maxIndex === nums.length-1){
        minIndex = 0;
    } else {
        minIndex = maxIndex+1;
    }
    return nums[minIndex];
};