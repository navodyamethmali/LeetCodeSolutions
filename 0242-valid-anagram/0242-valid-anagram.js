/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s=s.toLowerCase();
    t=t.toLowerCase();

    s_final= s.split('').sort().join('');
    t_final= t.split('').sort().join('');

    if(s_final===t_final){
        return true;
    }
    return false;
};