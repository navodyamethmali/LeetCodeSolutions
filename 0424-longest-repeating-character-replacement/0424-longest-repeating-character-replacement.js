/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    const counts = {};
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        counts[char] = (counts[char] || 0) + 1;
        
        maxCount = Math.max(maxCount, counts[char]);

        const currentWindowLength = right - left + 1;
        if (currentWindowLength - maxCount > k) {
            counts[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

