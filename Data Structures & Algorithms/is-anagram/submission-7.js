class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false
        }
        if (s == t){
            return true
        }
        let seenT = new Map()
        let seenS = new Map()
        for (let i=0;i<s.length;i++){
            seenT.set(t[i],(seenT.get(t[i]) || 0) + 1)
            seenS.set(s[i],(seenS.get(s[i]) || 0) + 1)
        }
        for (const [key, val] of seenT.entries()) {
            if (!seenS.has(key) || seenS.get(key) !== val) {
                return false;
            }
        }
        return true;
    }
}
