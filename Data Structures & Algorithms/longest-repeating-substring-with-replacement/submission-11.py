class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        counts = {}
        left = 0
        max_frequency = 0
        longest = 0

        for right in range(len(s)):
            char = s[right]
            counts[char] = counts.get(char, 0) + 1

            max_frequency = max(max_frequency, counts[char])

            window_length = right - left + 1
            replacements_needed = window_length - max_frequency

            while replacements_needed > k:
                left_char = s[left]
                counts[left_char] -= 1
                left += 1

                window_length = right - left + 1
                replacements_needed = window_length - max_frequency

            longest = max(longest, right - left + 1)

        return longest