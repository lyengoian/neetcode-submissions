class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        console.log(clean)
        let left = 0
        let right = clean.length-1
        while (right>left){
            if (clean[left] != clean[right]){
                return false
            }
            right --
            left ++
        }
        return true
    }
}
