const assert = require('assert');
const Set = require('../../../data-structures/sets-and-maps/Set');

describe('Set', () => {
    it('should create an empty set', () => {
        const set = new Set();
        assert.strictEqual(set.size(), 0);
    });

    it('should add elements to the set', () => {
        const set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        assert.strictEqual(set.size(), 3);
    });

    it('should not add duplicate elements to the set', () => {
        const set = new Set();
        set.add(1);
        assert.strictEqual(set.add(1), false);
        assert.strictEqual(set.size(), 1);
    });

    it('should remove elements from the set', () => {
        const set = new Set();
        set.add(1);
        set.add(2);

        assert.strictEqual(set.delete(1), true);
        assert.strictEqual(set.size(), 1);

        assert.strictEqual(set.delete(1), false);
    });

    it('should check if an element is in the set', () => {
        const set = new Set();
        set.add(1);
        assert.strictEqual(set.has(1), true);
        assert.strictEqual(set.has(2), false);
    });

    it('should return an array of all elements in the set', () => {
        const set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        const values = set.values();
        assert.deepStrictEqual(values, [1, 2, 3]);
    });

    it('should clear the set', () => {
        const set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        set.clear();
        assert.strictEqual(set.size(), 0);
    });
});
