const assert = require('assert');
const DoublyLinkedList = require('../../../data-structures/linked-lists/DoublyLinkedList');

describe('Doubly Linked List', () => {
    it('should create an empty list', () => {
        const list = new DoublyLinkedList();
        assert.strictEqual(list.head, null);
        assert.strictEqual(list.tail, null);
    });

    it('should append elements to the list', () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        const forwardElements = list.displayForward();
        const backwardElements = list.displayBackward();

        assert.deepStrictEqual(forwardElements, [1, 2, 3]);
        assert.deepStrictEqual(backwardElements, [3, 2, 1]);
    });

    it('should display an empty list as empty arrays', () => {
        const list = new DoublyLinkedList();
        const forwardElements = list.displayForward();
        const backwardElements = list.displayBackward();

        assert.deepStrictEqual(forwardElements, []);
        assert.deepStrictEqual(backwardElements, []);
    });

    it('should display a list with a single element', () => {
        const list = new DoublyLinkedList();
        list.append(42);

        const forwardElements = list.displayForward();
        const backwardElements = list.displayBackward();

        assert.deepStrictEqual(forwardElements, [42]);
        assert.deepStrictEqual(backwardElements, [42]);
    });
});
