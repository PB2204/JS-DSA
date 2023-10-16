const StringMatching = require('../../../algorithms/string/stringMatching');

describe('StringMatching', () => {
  it('should return an empty array when given an empty string', () => {
    const text = '';
    const substring = 'pattern';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
  });

  it('should return an empty array when given an empty substring', () => {
    const text = 'text with no pattern';
    const substring = '';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
  });

  it('should find occurrences of the substring in the text', () => {
    const text = 'text with pattern pattern pattern';
    const substring = 'pattern';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([10, 18, 26]);
  });

  it('should return an empty array when no occurrences are found', () => {
    const text = 'text with no pattern';
    const substring = 'missing';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
  });
});
