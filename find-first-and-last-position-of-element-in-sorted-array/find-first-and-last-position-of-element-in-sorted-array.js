/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1]; //if not found do i end correctly?
    if(nums.length === 0) return result;
    if(nums.length === 1) {
       return nums[0] === target ? [0,0] : result; 
    }
    var start = 0;
    var end = nums.length-1;
    var middle = Math.floor((end - start)/2);    
    while (end - start >= 0){
        if (nums[middle]=== target && ( nums[middle-1] < target || middle === start) )  { //does this work on the edge of the array?
            result[0] = middle;
            break; 
        //} else if (nums[middle] === target) {
          //  end = middle;  
        } else if (nums[middle] > target || nums[middle] === target) {
            end = middle - 1 ;         
        } else if (nums[middle] < target){
            start = middle + 1;
        }
        middle =  Math.floor((end - start)/2)+start; 
    }
    //console.log('result is' + result);
    start = 0;
    end = nums.length-1;
    middle = Math.floor((end - start)/2);   
    //if(end - start === 0 && nums[end] === target) {
      // result[1] = end;
    //} else if (end - start === 0 && nums[end] !== target) {
      // result[1] = end-1;
    //}
    while (end - start >= 0 ) {
        if (nums[middle] === target && ( nums[middle+1] > target || middle === end ) ) { //does this work on the edge of the array?
            result[1] = middle;
            break; 
        } else if (nums[middle] > target ) {
            end = middle-1;         
        //} else if (nums[middle] === target){
          //  if (start === middle) {
            //    start++;
            //} else {
              //  start = middle;
           // }
            
        } else if (nums[middle] < target || nums[middle] === target){
            start = middle+1 ;
        }
        middle =  Math.floor((end - start)/2)+start;  
    }
    return result;
      
};