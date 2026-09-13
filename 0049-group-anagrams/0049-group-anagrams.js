/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();
    for(const str of strs ){
        key =str.split('').sort().join('');
    
        if(groups.has(key)){
            groups.get(key).push(str);
        }
        else{
            groups.set(key, [str]);
        }
    }
    return Array.from(groups.values());
    
};