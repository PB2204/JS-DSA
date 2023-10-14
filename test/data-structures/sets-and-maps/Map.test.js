const assert = require('assert');
const Map = require('../../../data-structures/sets-and-maps/Map');

describe('Map', () => {
    it('should create an empty map', () => {
        const map = new Map();
        assert.strictEqual(map.size(), 0);
    });

    it('should set key-value pairs in the map', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        assert.strictEqual(map.size(), 2);
    });

    it('should get values associated with keys', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        assert.strictEqual(map.get('name'), 'Alice');
        assert.strictEqual(map.get('age'), 30);
    });

    it('should check if keys exist in the map', () => {
        const map = new Map();
        map.set('name', 'Alice');

        assert.strictEqual(map.has('name'), true);
        assert.strictEqual(map.has('age'), false);
    });

    it('should delete key-value pairs from the map', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        map.delete('name');
        assert.strictEqual(map.has('name'), false);
        assert.strictEqual(map.size(), 1);

        map.delete('age');
        assert.strictEqual(map.has('age'), false);
        assert.strictEqual(map.size(), 0);
    });

    it('should return an array of keys', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        const keys = map.keys();
        assert.deepStrictEqual(keys, ['name', 'age']);
    });

    it('should return an array of values', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        const values = map.values();
        assert.deepStrictEqual(values, ['Alice', 30]);
    });

    it('should clear the map', () => {
        const map = new Map();
        map.set('name', 'Alice');
        map.set('age', 30);

        map.clear();
        assert.strictEqual(map.size(), 0);
        assert.strictEqual(map.has('name'), false);
        assert.strictEqual(map.has('age'), false);
    });
});
