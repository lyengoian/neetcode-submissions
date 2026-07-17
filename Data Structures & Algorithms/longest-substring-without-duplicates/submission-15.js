class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //Input: s = "zxyzxyz"

    lengthOfLongestSubstring(s) {
        let max = 0
        for (let i=0;i<s.length;i++){
            let seen = new Map()
            let longest = 0
            let repeatFound = false
            let j = i
            while (!repeatFound && j<s.length){
                if (!seen.has(s[j])){
                    longest++
                    seen.set(s[j],1)
                }
                else{
                    repeatFound = true
                }
                j++
            }
            if(longest>max){
                max = longest
            }
        }
        return max
    }
}
