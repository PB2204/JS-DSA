const LogisticRegression = require('../../../algorithms/ml-statistical/logisticRegression');

describe('LogisticRegression', () => {
    it('should throw an error with empty data', () => {
        const data = [];

        const lr = new LogisticRegression();

        expect(() => lr.fit(data)).toThrow('Data must not be empty.');
    });
});
