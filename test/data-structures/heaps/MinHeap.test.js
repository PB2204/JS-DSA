const assert = require('assert');
const MinHeap = require('../../../data-structures/heaps/MinHeap');

describe('MinHeap', () => {
    it('should create an empty MinHeap', () => {
        const minHeap = new MinHeap();
        assert.strictEqual(minHeap.size(), 0);
        assert.strictEqual(minHeap.isEmpty(), true);
    });

    it('should insert and extract minimum values correctly', () => {
        const minHeap = new MinHeap();
        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(10);
        minHeap.insert(1);

        assert.strictEqual(minHeap.size(), 4);
        assert.strictEqual(minHeap.extractMin(), 1);
        assert.strictEqual(minHeap.size(), 3);

        minHeap.insert(0);
        assert.strictEqual(minHeap.extractMin(), 0);
        assert.strictEqual(minHeap.size(), 3);

        assert.strictEqual(minHeap.extractMin(), 3);
        assert.strictEqual(minHeap.extractMin(), 5);
        assert.strictEqual(minHeap.extractMin(), 10);
        assert.strictEqual(minHeap.size(), 0);
        assert.strictEqual(minHeap.isEmpty(), true);
    });
});
