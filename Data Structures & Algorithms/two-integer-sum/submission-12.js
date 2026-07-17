class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i=0;i<nums.length;i++){
            let missing = target - nums[i]
            if (seen.has(missing)){
                return [seen.get(missing),i]
            }
            else{
                seen.set(nums[i],i)
            }
        }
    }
}
