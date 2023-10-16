class LongestCommonSubstring {
    static findLongestCommonSubstring(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        let maxLength = 0; // Length of the longest common substring
        let endingIndex = 0; // Ending index of the longest common substring

        const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] > maxLength) {
                        maxLength = dp[i][j];
                        endingIndex = i - 1;
                    }
                } else {
                    dp[i][j] = 0;
                }
            }
        }

        if (maxLength === 0) {
            return '';
        }

        // Retrieve the longest common substring from str1
        return str1.substring(endingIndex - maxLength + 1, endingIndex + 1);
    }
}

module.exports = LongestCommonSubstring;
