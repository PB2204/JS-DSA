const assert = require('assert');
const HashTable = require('../../../data-structures/hash-tables/HashTable');

describe('HashTable', () => {
    it('should create an empty hash table with the default size', () => {
        const table = new HashTable();
        assert.strictEqual(table.size, 100);
    });

    it('should create an empty hash table with a specified size', () => {
        const table = new HashTable(50);
        assert.strictEqual(table.size, 50);
    });

    it('should insert and retrieve key-value pairs', () => {
        const table = new HashTable();
        table.insert('name', 'Alice');
        table.insert('age', 30);

        assert.strictEqual(table.get('name'), 'Alice');
        assert.strictEqual(table.get('age'), 30);
    });

    it('should handle key collisions', () => {
        const table = new HashTable(5);
        table.insert('apple', 'fruit');
        table.insert('apples', 'fruits');
        table.insert('banana', 'yellow');

        assert.strictEqual(table.get('apple'), 'fruit');
        assert.strictEqual(table.get('apples'), 'fruits');
        assert.strictEqual(table.get('banana'), 'yellow');
    });

    it('should return null for keys that do not exist', () => {
        const table = new HashTable();
        assert.strictEqual(table.get('nonexistent'), null);
    });

    it('should remove key-value pairs', () => {
        const table = new HashTable();
        table.insert('name', 'Alice');
        table.insert('age', 30);

        table.remove('name');
        assert.strictEqual(table.get('name'), null);

        table.remove('age');
        assert.strictEqual(table.get('age'), null);
    });
});
