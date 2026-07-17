class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {};
        let maxFreq = 0;

        for(let x of nums) {
            counts[x] = (counts[x] || 0 ) + 1;
            maxFreq = Math.max(maxFreq, counts[x]);
        }

        let freq = Array(maxFreq + 1).fill(0).map(() => []);
        for(let count in counts) {
            let f = counts[count];
            freq[f].push(Number(count));
        }

        let res = [];
        for(let i = maxFreq; i >= 1 && res.length < k; i--) {
            for(let x of freq[i]) {
                res.push(x);
                if(res.length == k) {
                    return res;
                }
            }
        }

        return res;
    }
}
