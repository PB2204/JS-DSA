const assert = require('assert');
const DisjointSet = require('../../../data-structures/disjoint-set/DisjointSet');

describe('DisjointSet', () => {
    it('should create a disjoint-set and make sets', () => {
        const ds = new DisjointSet();

        ds.makeSet('A');
        ds.makeSet('B');
        ds.makeSet('C');

        assert.strictEqual(ds.find('A'), 'A');
        assert.strictEqual(ds.find('B'), 'B');
        assert.strictEqual(ds.find('C'), 'C');
    });

    it('should perform union on disjoint sets', () => {
        const ds = new DisjointSet();

        ds.makeSet('A');
        ds.makeSet('B');
        ds.makeSet('C');
        ds.makeSet('D');

        ds.union('A', 'B');
        ds.union('C', 'D');
        ds.union('B', 'D');

        assert.strictEqual(ds.find('A'), 'A');
        assert.strictEqual(ds.find('B'), 'A');
        assert.strictEqual(ds.find('C'), 'A');
        assert.strictEqual(ds.find('D'), 'A');
    });

    it('should handle invalid operations gracefully', () => {
        const ds = new DisjointSet();

        ds.makeSet('A');
        ds.makeSet('B');

        assert.strictEqual(ds.find('A'), 'A');
        assert.strictEqual(ds.find('B'), 'B');

        // Attempt to union elements that don't exist.
        assert.strictEqual(ds.union('C', 'D'), false);

        // Attempt to union elements that are already in the same set.
        assert.strictEqual(ds.union('A', 'B'), true);

        // Attempt to find an element that doesn't exist.
        assert.strictEqual(ds.find('C'), null);
    });
});
