/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    const numset =  new Set(nums);

    let longestStreak =0;
    for(let currentNumber of numset){
        if(!(numset.has(currentNumber -1))){
            let currentNum = currentNumber;
            let currentStreak = 1;

            while(numset.has(currentNum+1)){
                currentNum += 1;
                currentStreak +=1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};