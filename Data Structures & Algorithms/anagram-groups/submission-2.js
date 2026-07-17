class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = new Map()
        for (let i=0;i<strs.length;i++){
            const sortedText = strs[i].split("").sort().join("");
            if (sorted.has(sortedText)){
                let indices = sorted.get(sortedText)
                sorted.set(sortedText,[...indices,strs[i]])
            }
            else {
                sorted.set(sortedText,[strs[i]])
            }
        }
        let final = []
        for (const val of sorted.values()){
            final.push(val)
        }
        return final
    }
}
