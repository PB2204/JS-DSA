class MatrixChainMultiplication {
    constructor() {}

    findMinMultiplications(dimensions) {
        const n = dimensions.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        for (let len = 2; len < n; len++) {
            for (let i = 1; i < n - len + 1; i++) {
                const j = i + len - 1;
                dp[i][j] = Number.MAX_SAFE_INTEGER;
                for (let k = i; k <= j - 1; k++) {
                    const cost = dp[i][k] + dp[k + 1][j] + dimensions[i - 1] * dimensions[k] * dimensions[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }

        return dp[1][n - 1];
    }
}

module.exports = MatrixChainMultiplication;
