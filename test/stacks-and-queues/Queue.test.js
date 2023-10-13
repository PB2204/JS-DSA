const assert = require('assert');
const Queue = require('../../data-structures/stacks-and-queues/Queue');

describe('Queue', () => {
    it('should create an empty queue', () => {
        const queue = new Queue();
        assert.strictEqual(queue.size(), 0);
        assert.strictEqual(queue.isEmpty(), true);
    });

    it('should add elements to the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        assert.strictEqual(queue.size(), 3);
        assert.strictEqual(queue.isEmpty(), false);
    });

    it('should remove and return the front element from the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        const dequeued = queue.dequeue();
        assert.strictEqual(dequeued, 1);
        assert.strictEqual(queue.size(), 2);
    });

    it('should return the front element without removing it', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        const frontElement = queue.front();
        assert.strictEqual(frontElement, 1);
        assert.strictEqual(queue.size(), 3);
    });

    it('should handle an empty queue when dequeuing or getting the front element', () => {
        const queue = new Queue();
        const dequeued = queue.dequeue();
        const frontElement = queue.front();

        assert.strictEqual(dequeued, null);
        assert.strictEqual(frontElement, null);
        assert.strictEqual(queue.size(), 0);
        assert.strictEqual(queue.isEmpty(), true);
    });
});
