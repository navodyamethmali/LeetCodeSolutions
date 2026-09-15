/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    if(cleanedString === reversedString){return true;}
    else{return false;}
};