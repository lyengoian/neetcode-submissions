class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0
        for i in range(len(s)):
            seen = []
            print("i:",i)
            j = i+1
            for j in range(i,len(s)):
                print("j:",j)
                if s[j] in seen:
                    print("nope")
                    break
                else:
                    print("added:",s[j])
                    seen.append(s[j])
                    if len(seen) > longest:
                        longest = len(seen)
            
        return longest
