class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums)+1)]
        
        for n in nums:
            if n in count:
                count[n] = 1 + count[n]
            else:
                count[n] = 1   

        for number, count in count.items():
            freq[count].append(number);
        res = []
        for i in range(len(freq)-1,0,-1):
            for n in freq[i]:
                res.append(n)
                if len(res)==k:
                    return res
       




        