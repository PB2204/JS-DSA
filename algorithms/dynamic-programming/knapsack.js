class Knapsack {
    constructor() { }

    findMaxValue(weights, values, capacity) {
        const n = values.length;
        const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

        for (let i = 0; i <= n; i++) {
            for (let w = 0; w <= capacity; w++) {
                if (i === 0 || w === 0) {
                    dp[i][w] = 0;
                } else if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        return dp[n][capacity];
    }
}

module.exports = Knapsack;
