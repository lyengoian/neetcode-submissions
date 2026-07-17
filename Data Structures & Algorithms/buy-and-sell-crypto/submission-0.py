class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        for i in range(len(prices)):
            j = len(prices)-1
            while j>i:
                profit = prices[j]-prices[i]
                if profit > max_profit:
                    max_profit = profit
                j-=1
        return max_profit



        
        