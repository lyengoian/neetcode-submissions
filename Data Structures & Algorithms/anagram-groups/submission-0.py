class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strs_dict = {}
        for i in range(len(strs)):
            so = "".join(sorted(strs[i]))
            if so not in strs_dict:
                strs_dict[so] = [strs[i]]
            else:
                strs_dict[so].append(strs[i])

        lis = []
        for value in strs_dict.values():
            lis.append(value)

        return (lis)