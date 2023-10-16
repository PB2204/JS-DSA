const LinearRegression = require('../../../algorithms/ml-statistical/linearRegression');

describe('LinearRegression', () => {
    it('should fit the model with data', () => {
        const data = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
        ];

        const lr = new LinearRegression();
        lr.fit(data);

        expect(lr.coefficients.intercept).toBeCloseTo(1.0, 6);
        expect(lr.coefficients.slope).toBeCloseTo(1.0, 6);
    });

    it('should predict values', () => {
        const data = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
        ];

        const lr = new LinearRegression();
        lr.fit(data);

        expect(lr.predict(6)).toBeCloseTo(7.0, 6);
        expect(lr.predict(7)).toBeCloseTo(8.0, 6);
    });

    it('should throw an error with insufficient data', () => {
        const data = [[1, 2]];

        const lr = new LinearRegression();

        expect(() => lr.fit(data)).toThrow('Insufficient data for linear regression');
    });
});
