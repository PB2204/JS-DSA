class LogisticRegression {
    constructor() {
        this.coefficients = { intercept: 0, slope: [] };
    }

    // Fit the model to the provided data
    fit(data) {
        if (data.length === 0) {
            throw new Error('Data must not be empty.');
        }

        if (data[0].length < 2) {
            throw new Error('Insufficient features for logistic regression');
        }

        const n = data.length;
        const features = data[0].length - 1;
        const X = [];
        const y = [];

        for (let i = 0; i < n; i++) {
            X.push([1].concat(data[i].slice(0, features))); // Include a 1 for the intercept term
            y.push(data[i][features]);
        }

        const maxIterations = 1000;
        const learningRate = 0.1;

        for (let iteration = 0; iteration < maxIterations; iteration++) {
            const predictions = this.predict(X);
            const errors = [];

            for (let i = 0; i < n; i++) {
                errors.push(predictions[i] - y[i]);
            }

            const gradient = [];
            for (let j = 0; j < features + 1; j++) {
                let sum = 0;
                for (let i = 0; i < n; i++) {
                    sum += errors[i] * X[i][j];
                }
                gradient.push(sum / n);
            }

            this.coefficients.intercept -= learningRate * gradient[0];
            for (let j = 0; j < features; j++) {
                this.coefficients.slope[j] -= learningRate * gradient[j + 1];
            }
        }
    }

    // Predict the probability of the positive class
    predict(features) {
        const z = this.coefficients.intercept + this.coefficients.slope.reduce((sum, coefficient, j) => sum + coefficient * features[j], 0);
        const probability = 1 / (1 + Math.exp(-z));
        return probability;
    }
}

module.exports = LogisticRegression;
