const assert = require('assert');
const Trie = require('../../data-structures/trie/Trie');

describe('Trie', () => {
    it('should insert and search for words', () => {
        const trie = new Trie();

        trie.insert('apple');
        trie.insert('app');
        trie.insert('banana');

        assert.strictEqual(trie.search('apple'), true);
        assert.strictEqual(trie.search('app'), true);
        assert.strictEqual(trie.search('banana'), true);
        assert.strictEqual(trie.search('appl'), false);
        assert.strictEqual(trie.search('apples'), false);
    });

    it('should check for word prefixes', () => {
        const trie = new Trie();

        trie.insert('apple');
        trie.insert('app');
        trie.insert('banana');

        assert.strictEqual(trie.startsWith('app'), true);
        assert.strictEqual(trie.startsWith('ban'), true);
        assert.strictEqual(trie.startsWith('apx'), false);
    });
});
