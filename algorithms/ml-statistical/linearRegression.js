class LinearRegression {
    constructor() {
        this.coefficients = { intercept: 0, slope: 0 };
    }

    // Fit the model to the provided data
    fit(data) {
        if (data.length < 2) {
            throw new Error('Insufficient data for linear regression');
        }

        const n = data.length;
        const sumX = data.reduce((acc, [x]) => acc + x, 0);
        const sumY = data.reduce((acc, [, y]) => acc + y, 0);
        const sumXX = data.reduce((acc, [x]) => acc + x * x, 0);
        const sumXY = data.reduce((acc, [x, y]) => acc + x * y, 0);

        const slope =
            (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept =
            (sumY - slope * sumX) / n;

        this.coefficients.slope = slope;
        this.coefficients.intercept = intercept;
    }

    // Predict the output for a given input
    predict(x) {
        return this.coefficients.intercept + this.coefficients.slope * x;
    }
}

module.exports = LinearRegression;
