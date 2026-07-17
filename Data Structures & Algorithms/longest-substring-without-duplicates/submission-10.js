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
                /*
                console.log(`s[i]: ${s[i]}`)
                console.log(`i: ${i}`)                
                console.log(`s[j]: ${s[j]}`)
                console.log(`j: ${j}`)
                */
                if (!seen.has(s[j])){
                    //console.log(`${s[j]} not seen yet, adding to seen`)
                    longest++
                    //console.log(`longest: ${longest}`)
                    seen.set(s[j],1)
                    //console.log(`seen: ${seen}`)
                }
                else{
                    //console.log(`${s[j]} already seen. Repeat detected`)
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
