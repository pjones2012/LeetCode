/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var top = 0;
    var bottom = matrix.length-1;
    var middle = Math.floor((bottom-top)/2);
    
    while(top<=bottom){
        //console.log(middle);
        if(matrix[middle][0]<=target && matrix[middle][matrix[middle].length-1]>=target ){
           var row = middle;
            break;
        } else if (matrix[middle][0]<target){
            top = middle+1;
        } else if (matrix[middle][0]>target){
            bottom = middle-1;
        }
        middle = Math.floor((bottom-top)/2) + top;
    }
    //console.log(row);
    if(row === undefined) return false;
    top = 0;
    bottom = matrix[row].length-1;
    middle = Math.floor((bottom-top)/2);
    
    while(top<=bottom){
        //console.log(middle);
        if(matrix[row][middle] ===target){
           return true;
        } else if (matrix[row][middle]<target){
            top = middle+1;
        } else if (matrix[row][middle]>target){
            bottom = middle-1;
        }
        middle = Math.floor((bottom-top)/2) + top;
    }
    return false;
};