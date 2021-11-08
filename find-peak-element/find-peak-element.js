/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var maxIndex = 0;
    var left = 0;
    var right = nums.length-1;
    var middle = Math.floor((right-left)/2)+left;
    while (left <= right){
        //what about edges
        var behind =  nums[middle-1] === undefined? -Infinity:nums[middle-1];
        var inFront = nums[middle+1] === undefined? -Infinity:nums[middle+1]
        if (nums[middle] > behind && nums[middle] > inFront){
           return middle;
        } else if (nums[middle] >= inFront){
           right = middle-1;
        } else if (nums[middle] >= behind){
           left = middle+1;   
        } else if (nums[middle] <inFront && nums[middle] < behind){ 
           right = middle-1;  
        }
        middle = Math.floor((right-left)/2)+left;
    }
    return middle;
};

