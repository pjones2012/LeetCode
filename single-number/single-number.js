/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    nums.sort();
    
    var lastSeen = null;
    for (var i = 0; i < nums.length; i++){
        
        if (nums[i] === lastSeen){
          
          lastSeen = null;
        } else if (lastSeen === null) {
         
          lastSeen = nums[i];
        }
    }
    return lastSeen;
};