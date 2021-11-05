/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var [top, left] = [0,0]
    var [bottom, right] = [n-1,n-1];
    var direction = 'right';
    var row = 0;
    var col = 0;
    var result = new Array(n);
    for (var i = 0; i < result.length; i++){
        result[i]=new Array(n).fill(null);
    }
    var count = 1;
    while (count <= n*n){
        //console.log(result);
        //console.log(row, col, count);
        result[row][col] = count;
        //console.log(result);
        count++;
        if(direction === 'right'){
           col++;
        } else if (direction === 'down') {
           row++;
        }  else if (direction === 'left') {
           col--;
        }  else if (direction === 'up') {
           row--;
        }
        
        if (direction === 'right' && col === right){
           // console.log('go down');
           direction = 'down';
           top++;
        } else if (row === bottom && direction === 'down') {
           //  console.log('go left');
           direction = 'left';
           right--;
        }  else if (direction === 'left' && col === left) {
           //  console.log('go up');
           direction = 'up';
           bottom--;
        }  else if (row === top && direction === 'up') {
           //  console.log('go right');
           direction = 'right';
           left++;
        }
        
    }
    return result;
};