/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [0, 1, 0];
    var row = 0;
    while(row<rowIndex){
        row++;
        for (var i = 1; i <= row; i++){
            result[i] = result[i]+result[i+1];
        }
        result.splice(1,0,1);
        //console.log(result);
    }
    result = result.slice(1,result.length-1);
    return result;
    
};