/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    var results = [];
    //initialize i as index of first list
    var i = 0;
    //initialize j as index of second list
    var j = 0;
    var start, end;
    //while both lists not done
    while (i < firstList.length && j < secondList.length){
      //compare starts
        //then start = max
      start = Math.max(firstList[i][0], secondList[j][0]);
      // compare ends
        //then end = min
      end = Math.min(firstList[i][1], secondList[j][1]);
      //if start <= end
      if (start <=end){
         //add to results
         results.push([start, end]);
      }
        
      //which ever ends first increment
      if (firstList[i][1] < secondList[j][1]){
          i++;
      } else {
         j++;   
      }
    }
    return results;
};
