class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {}
        for (let i=0;i<nums.length;i++){
            if (nums[i] in seen){
                return true
            }
            else{
                seen[nums[i]] = 1
            }
        }
        return false
    }
}
