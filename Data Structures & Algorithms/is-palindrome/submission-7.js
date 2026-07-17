class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        /*
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
        */
        let reversed = clean.split("").reverse().join("")
        if (reversed == clean){
            return true
        }
        else{
            return false
        }
    }
}
