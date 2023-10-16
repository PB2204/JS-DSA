const EditDistance = require('../../../algorithms/dynamic-programming/editDistance');

describe('EditDistance (OOP)', () => {
    const editDistance = new EditDistance();

    it('should find the edit distance between two strings', () => {
        // Test case 1
        const str1 = 'kitten';
        const str2 = 'sitting';
        expect(editDistance.findEditDistance(str1, str2)).toBe(3);

        // Test case 2
        const str3 = 'flaw';
        const str4 = 'lawn';
        expect(editDistance.findEditDistance(str3, str4)).toBe(2);

        // Test case 3 (Edge case: Empty strings)
        const str5 = '';
        const str6 = '';
        expect(editDistance.findEditDistance(str5, str6)).toBe(0);

        // Test case 4 (Edge case: One string is empty)
        const str7 = 'abc';
        const str8 = '';
        expect(editDistance.findEditDistance(str7, str8)).toBe(3);

        // Test case 5 (Edge case: Both strings are empty)
        const str9 = '';
        const str10 = '';
        expect(editDistance.findEditDistance(str9, str10)).toBe(0);
    });
});
