/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const length = nums.length;
    const answer = new Array(length);

    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}