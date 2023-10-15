class LongestCommonSubsequence {
    findLCS(str1, str2) {
        const m = str1.length;
        const n = str2.length;

        // Create a 2D array to store the length of LCS for substrings
        const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

        // Build the dp array using a bottom-up approach
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Reconstruct the LCS from the dp array
        let i = m;
        let j = n;
        const lcs = [];
        while (i > 0 && j > 0) {
            if (str1[i - 1] === str2[j - 1]) {
                lcs.unshift(str1[i - 1]);
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return lcs.join('');
    }
}

module.exports = LongestCommonSubsequence;
