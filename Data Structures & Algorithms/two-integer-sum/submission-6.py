class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            difference = target - nums[i]
            if difference in nums:
                indx = nums.index(difference)
                if indx != i:
                    if indx > i:
                        return [i, indx]
                    else:
                        return [indx, i]



            


        