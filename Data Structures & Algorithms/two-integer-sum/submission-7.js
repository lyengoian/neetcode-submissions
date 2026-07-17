class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    /*twoSum(nums, target) {
        const seen = new Map();
        for (let i=0;i<nums.length;i++){
            let missing = target - nums[i]
            if (missing in nums){
                return [seen.get(missing),i]
            }
            seen.set(nums[i],i)
        }
    }
    */

    twoSum(nums, target) {
        let seen = {}
        for (let i=0;i<nums.length;i++){
            let missing = target-nums[i];
            if (missing in seen){
                return [seen[missing],i]
            }
            seen[nums[i]] = i
        }
    }
}
