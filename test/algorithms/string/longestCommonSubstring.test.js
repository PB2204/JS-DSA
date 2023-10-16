const LongestCommonSubstring = require('../../../algorithms/string/longestCommonSubstring');

describe('LongestCommonSubstring', () => {
    it('should find the longest common substring between two identical strings', () => {
        const str1 = 'hello';
        const str2 = 'hello';

        const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

        expect(commonSubstring).toBe('hello');
    });

    it('should find the longest common substring between two different strings', () => {
        const str1 = 'abcdefgh';
        const str2 = 'cdefg';

        const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

        expect(commonSubstring).toBe('cdefg');
    });

    it('should handle no common substring between two strings', () => {
        const str1 = 'abcdef';
        const str2 = 'xyz';

        const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

        expect(commonSubstring).toBe('');
    });

    it('should handle one empty string', () => {
        const str1 = 'abc';
        const str2 = '';

        const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

        expect(commonSubstring).toBe('');
    });

    it('should handle both empty strings', () => {
        const str1 = '';
        const str2 = '';

        const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

        expect(commonSubstring).toBe('');
    });
});
