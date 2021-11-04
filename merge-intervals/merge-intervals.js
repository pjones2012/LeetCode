/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   for (var i = 0; i < intervals.length-1; i++){
       //console.log(intervals);
       if (intervals[i+1][1]<intervals[i][0]) {
           var hold = intervals[i];
           intervals[i] = intervals[i+1];
           intervals[i+1] = hold;
           i= i-2 < -1 ? -1 : i-2; 
           //console.log('I after orderswap' + i);
       } else if (intervals[i+1][0]<intervals[i][0]) {
           intervals[i] = [intervals[i+1][0], intervals[i][1]];
           i=i-2< -1? -1:i-2; 
           //console.log('I after a start swap' + i);
       } else if (intervals[i+1][1]<intervals[i][1]) {
           intervals.splice(i+1,1);
           i=i-2< -1 ? -1:i-2; 
           //console.log('I after an end swap' + i);
       } else if(intervals[i+1][0]<=intervals[i][1]){
           intervals[i] = [intervals[i][0], intervals[i+1][1]];
           intervals.splice(i+1,1);
           i=i-2<-1 ? -1:i-2; 
           //console.log('I after a normal adjustment' + i);
       }
   } 
    return intervals;
};