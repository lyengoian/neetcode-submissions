class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sorted_nums = sorted(nums)
        triplets = []
        for i in range(len(sorted_nums)-1):
            k=len(sorted_nums)-1
            j=i+1
            while j<k:
                #print(sorted_nums)
                #print("i:", i, "value:",sorted_nums[i])
                #print("j:", j, "value:",sorted_nums[j])
                #print("k: ",k, "value:",sorted_nums[k])
                target = -sorted_nums[i]
                #print("target:", target)
                if (sorted_nums[k]+sorted_nums[j]<target):
                    #print("j goes up")
                    j+=1
                elif (sorted_nums[k]+sorted_nums[j]>target):
                    #print("k goes down")
                    k-=1
                else:
                    #print("triplet added")
                    trip = [sorted_nums[i],sorted_nums[j],sorted_nums[k]]
                    if trip not in triplets:
                        triplets.append([sorted_nums[i],sorted_nums[j],sorted_nums[k]])
                    k-=1
        return triplets