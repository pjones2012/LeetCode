/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    var final1 = '';
    var final2 = '';
    var maxLen = Math.max(s.length, t.length);
    for (var i = 0; i<maxLen; i++){
        if(s[i] !== undefined){
            if(s[i]==='#'){
                final1 = final1.slice(0,final1.length-1);
            } else {
                final1 += s[i];
            }
        }
        
        if(t[i] !== undefined){
            if(t[i]==='#'){
                final2 = final2.slice(0,final2.length-1);
            } else {
                final2 += t[i];
            }
        }
        console.log(final1, final2);
    }
    return final1 === final2;
};