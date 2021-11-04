/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for (var j = 0; j < len; j++){
        matrix.push([]);
        for (var i = len-1; i >= 0; i--){
            matrix[matrix.length-1].push(matrix[i][j]);
        }
    }
    matrix.splice(0,len);
    
};