class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let matching = {")":"(","}":"{","]":"["}
        for (const char of s){
            //console.log(stack)
            if(char === "(" || char === "[" || char ==="{"){
                stack.push(char)
            }
            else{
                if(stack[stack.length-1]!== matching[char]){
                    return false
                }
                stack.pop() //remove last item
            }
        }
        return stack.length === 0
    }
}
