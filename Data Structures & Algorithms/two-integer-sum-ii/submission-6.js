class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1
        if (numbers.length ==2){
            return [1,2]
        }
        while (right>left){
            if (numbers[left] + numbers[right] == target){
                return [left+1, right+1]
            }
            else if (numbers[left] + numbers[right] > target){
                right --
            }
            else{
                left ++
            }
        }
    }
}
