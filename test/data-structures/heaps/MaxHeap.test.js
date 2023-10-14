const assert = require('assert');
const MaxHeap = require('../../../data-structures/heaps/MaxHeap');

describe('MaxHeap', () => {
    it('should create an empty MaxHeap', () => {
        const maxHeap = new MaxHeap();
        assert.strictEqual(maxHeap.size(), 0);
        assert.strictEqual(maxHeap.isEmpty(), true);
    });

    it('should insert and extract maximum values correctly', () => {
        const maxHeap = new MaxHeap();
        maxHeap.insert(5);
        maxHeap.insert(3);
        maxHeap.insert(10);
        maxHeap.insert(1);

        assert.strictEqual(maxHeap.size(), 4);
        assert.strictEqual(maxHeap.extractMax(), 10);
        assert.strictEqual(maxHeap.size(), 3);

        maxHeap.insert(12);
        assert.strictEqual(maxHeap.extractMax(), 12);
        assert.strictEqual(maxHeap.size(), 3);

        assert.strictEqual(maxHeap.extractMax(), 5);
        assert.strictEqual(maxHeap.extractMax(), 3);
        assert.strictEqual(maxHeap.extractMax(), 1);
        assert.strictEqual(maxHeap.size(), 0);
        assert.strictEqual(maxHeap.isEmpty(), true);
    });
});
