/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    if (nums.length === 1){
        return nums[0]===target?0:-1;
    }
    var maxIndex = 0;
    var left = 0;
    var right = nums.length-1;
    var mid = Math.floor((right-left)/2);
    while (left<=right){
        if(nums[mid-1]< nums[mid] && nums[mid+1] < nums[mid]) {
            //console.log('i found pivot ' + nums[mid] +' at ' + mid );
            maxIndex = mid;
            break;
        } else {
            //console.log('i sense increases');
            if (nums[mid]>=nums[maxIndex]){
              maxIndex = mid;
              left = mid+1;  
            } else if (nums[mid]<nums[maxIndex]){
              right = mid-1;  
            }  
        }
        mid = Math.floor((right-left)/2)+left;
        console.log('max index '+maxIndex);
    } 
    var leftArr = nums.slice(0,maxIndex+1);
    var rightArr = nums.slice(maxIndex+1, nums.length);
    console.log('i have 2 arrays' + leftArr +' and '+ rightArr);
    if (leftArr[0]<=target){
        var searchArr = leftArr;
        var offset = 0;
    } else {
        var searchArr = rightArr;
        var offset = leftArr.length;
    }
    console.log('the chosen array is' + searchArr);
    //binary search on the remaining array.
    left = 0;
    right = searchArr.length-1;
    mid = Math.floor((right-left)/2);
    //console.log('i have 2 arrays' + right);
    while (left<=right){
        if(searchArr[mid] === target) {
            return mid+offset;
        } else if (searchArr[mid] > target){
            right = mid-1;  
        } else if (searchArr[mid] < target){
            left = mid+1;  
        }
       mid = Math.floor((right-left)/2)+left; 
      // break;
    }
    return -1;
};