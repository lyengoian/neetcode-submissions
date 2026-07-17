class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        counts = {}
        left = 0
        max_frequency = 0
        longest = 0

        for right in range(len(s)):
            char = s[right]
            if char not in counts:
                counts[char] = 1
            else:
                counts[char] += 1

            max_frequency = max(max_frequency, counts[char])

            window_length = right - left + 1
            replacements_needed = window_length - max_frequency

            while replacements_needed > k: #shrinking the window
                left_char = s[left]
                counts[left_char] -= 1
                left += 1

                window_length = right - left + 1
                replacements_needed = window_length - max_frequency

            longest = max(longest, window_length)

        return longest