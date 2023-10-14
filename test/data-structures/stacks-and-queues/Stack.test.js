const assert = require('assert');
const Stack = require('../../data-structures/stacks-and-queues/Stack');

describe('Stack', () => {
    it('should create an empty stack', () => {
        const stack = new Stack();
        assert.strictEqual(stack.size(), 0);
        assert.strictEqual(stack.isEmpty(), true);
    });

    it('should add elements to the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.strictEqual(stack.size(), 3);
        assert.strictEqual(stack.isEmpty(), false);
    });

    it('should remove and return the top element from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const popped = stack.pop();
        assert.strictEqual(popped, 3);
        assert.strictEqual(stack.size(), 2);
    });

    it('should return the top element without removing it', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const peeked = stack.peek();
        assert.strictEqual(peeked, 3);
        assert.strictEqual(stack.size(), 3);
    });

    it('should handle an empty stack when popping or peeking', () => {
        const stack = new Stack();
        const popped = stack.pop();
        const peeked = stack.peek();

        assert.strictEqual(popped, null);
        assert.strictEqual(peeked, null);
        assert.strictEqual(stack.size(), 0);
        assert.strictEqual(stack.isEmpty(), true);
    });
});
