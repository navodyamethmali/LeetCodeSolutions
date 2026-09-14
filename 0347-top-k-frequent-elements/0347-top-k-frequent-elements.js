/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, frequency] of frequencyMap.entries()) {
    buckets[frequency].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }

    if (result.length === k) {
      return result;
    }
  }

  return result;
}