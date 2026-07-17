class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanString: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = cleanString.length-1;
        let j = 0;
        while (j<=i){
            if (cleanString[j] != cleanString[i]){
                return false
            }
            else {
                j++
                i--
            }
        }
        return true
    }
}
