class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map()
        //go through nums and track how many times each number appears
        nums.map(num => seen.set(num,(seen.get(num)||0)+1))
        console.log(seen) //Map(3) { 1 => 1, 2 => 2, 3 => 3 }
        const frequencies = Array.from({length: nums.length + 1}, () => [])
        console.log(frequencies)
        for (const [k,v] of seen.entries()){
            frequencies[v].push(k)
        }
        console.log(frequencies)// [ [], [ 1 ], [ 2 ], [ 3 ], [], [] ]

        let final = []
        for (let i=frequencies.length-1;i>0;i--){
            for (let j=0;j<frequencies[i].length;j++){
                final.push(frequencies[i][j])
                if (final.length == k){
                    return final
                }
            }
        }
    }
}
