class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        num_dict = dict()
        for num in nums: #go through the number array
            if num in num_dict: #if the key already exists in the dict
                return True #then it's a dupe
            else: #otherwise, add it to the dict
                num_dict[num] = 1

        return False
        