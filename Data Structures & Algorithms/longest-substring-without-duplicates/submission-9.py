class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0
        for i in range(len(s)):
            seen = []
            j = i+1
            for j in range(i,len(s)):
                if s[j] in seen:
                    break
                else:
                    seen.append(s[j])
                    if len(seen) > longest:
                        longest = len(seen)
            
        return longest
