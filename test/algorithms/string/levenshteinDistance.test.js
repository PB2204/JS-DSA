const LevenshteinDistance = require('../../../algorithms/string/levenshteinDistance');

describe('LevenshteinDistance', () => {
    it('should compute the Levenshtein distance between two identical strings', () => {
        const str1 = 'kitten';
        const str2 = 'kitten';

        const distance = LevenshteinDistance.computeDistance(str1, str2);

        expect(distance).toBe(0);
    });

    it('should compute the Levenshtein distance between two different strings', () => {
        const str1 = 'kitten';
        const str2 = 'sitting';

        const distance = LevenshteinDistance.computeDistance(str1, str2);

        expect(distance).toBe(3);
    });

    it('should handle one empty string', () => {
        const str1 = 'kitten';
        const str2 = '';

        const distance = LevenshteinDistance.computeDistance(str1, str2);

        expect(distance).toBe(6);
    });

    it('should handle both empty strings', () => {
        const str1 = '';
        const str2 = '';

        const distance = LevenshteinDistance.computeDistance(str1, str2);

        expect(distance).toBe(0);
    });

    it('should handle one string being a prefix of the other', () => {
        const str1 = 'hello';
        const str2 = 'hello world';

        const distance = LevenshteinDistance.computeDistance(str1, str2);

        expect(distance).toBe(6);
    });
});
