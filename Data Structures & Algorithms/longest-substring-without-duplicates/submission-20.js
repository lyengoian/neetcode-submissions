class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    lengthOfLongestSubstring(s) {
        let max = 0
        let seen = new Set()
        let left = 0
        for (let right=left;right<s.length;right++){
            let char = s[right]
            console.log(seen)
            while (seen.has(char)){
                seen.delete(s[left])
                left++
            }
            seen.add(char)
            if (right-left+1 > max){
                max = right-left+1
            }
        }
        return max
    }
}
