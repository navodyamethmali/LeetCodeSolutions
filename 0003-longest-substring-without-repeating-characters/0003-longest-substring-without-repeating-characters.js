/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = new Set();
    let left=0;
    let max_length=0;

    for (let right = 0; right < s.length; right++) {
        
        while (str.has(s[right])) {
            str.delete(s[left]);
            left++;
        }
        str.add(s[right]);

        if((right - left + 1)>max_length){
            max_length =  right - left + 1;
        }
    }

    return max_length;
}
