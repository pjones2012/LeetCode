/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var iter = 0;
    var result = '';
    var lenOne = num1.length;
    var lenTwo = num2.length;
    var longest = Math.max(lenOne, lenTwo);
    while (iter < longest) {
        var a = Number(num1[lenOne-iter-1]) || 0;
        var b = Number(num2[lenTwo-iter-1]) || 0;
        var digit = a + b + carry;
        if(digit >= 10){
            digit = digit-10;
            carry = 1;
        } else {
            carry = 0;
        }
        result = digit+ result;
        iter++;
    }
    carry = carry||'';
    result = carry + result;
    return result;
};