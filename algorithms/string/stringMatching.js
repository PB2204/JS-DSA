class StringMatching {
    static findSubstringOccurrences(text, substring) {
        if (!text || !substring) {
            return [];
        }

        const occurrences = [];
        for (let i = 0; i < text.length; i++) {
            if (text.substring(i, i + substring.length) === substring) {
                occurrences.push(i);
            }
        }

        return occurrences;
    }
}

module.exports = StringMatching;
