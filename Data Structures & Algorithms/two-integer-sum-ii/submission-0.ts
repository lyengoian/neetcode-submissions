class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = numbers.length - 1;
        let j = 0;
        let indexes = [];
        while (i!=j){
            console.log("target: ", target)
            if (numbers[i]+numbers[j]<target){
                j++;
            }
            else if (numbers[i]+numbers[j]>target){
                i--;
            }
            else {
                indexes = [j+1,i+1]
                i=j;
            }
        }
        return indexes
    }
}
