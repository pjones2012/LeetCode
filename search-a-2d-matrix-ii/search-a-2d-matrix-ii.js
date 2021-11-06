/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    
    
    var row = 0;
    while (matrix[row] !== undefined && matrix[row][0]<=target){
       if( matrix[row][matrix[row].length-1]>target){
           var [left, right] = [0, matrix[row].length-1];
           var middle = Math.floor((right - left)/2)+left;
           while (left<=right){
               //console.log(left, right, middle, matrix[row][middle]);
               if (matrix[row][middle] > target){
                   right = middle-1;
                } else if (matrix[row][middle] < target){
                   left = middle+1;
                } else if (matrix[row][middle] === target) {
                   return true;
                }
               middle = Math.floor((right - left)/2)+left;
           }
       } else if( matrix[row][matrix[row].length-1] === target){
           return true;
       }
        row++;
    }
    return false;
};