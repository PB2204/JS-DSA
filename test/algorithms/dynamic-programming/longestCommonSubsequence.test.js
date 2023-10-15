// Import the LongestCommonSubsequence class
const LongestCommonSubsequence = require('../../../algorithms/dynamic-programming/longestCommonSubsequence');

describe('LongestCommonSubsequence (OOP)', () => {
    it('should find the longest common subsequence between two strings', () => {
        const lcs = new LongestCommonSubsequence();

        // Test cases
        expect(lcs.findLCS('AGGTAB', 'GXTXAYB')).toBe('GTAB');
        expect(lcs.findLCS('ABC', 'AC')).toBe('AC');
        expect(lcs.findLCS('XMJYAUZ', 'MZJAWXU')).toBe('MJAU');

        // Edge cases
        expect(lcs.findLCS('', 'ABC')).toBe('');
        expect(lcs.findLCS('ABC', '')).toBe('');
        expect(lcs.findLCS('', '')).toBe('');

        // Test a large example
        const str1 = 'AGGTAB'.repeat(100);
        const str2 = 'GXTXAYB'.repeat(100);
        const expected = 'GTAB'.repeat(100);
        expect(lcs.findLCS(str1, str2)).toBe(expected);

        // Additional test cases
        expect(lcs.findLCS('ABCD', 'DCBA')).toBe('D');
        expect(lcs.findLCS('ABCDEF', 'XYZ')).toBe('');
        expect(lcs.findLCS('ABC', 'XYZ')).toBe('');
        expect(lcs.findLCS('ABCD', 'EFGH')).toBe('');
    });
});