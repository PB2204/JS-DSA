const assert = require('assert');
const CircularLinkedList = require('../../data-structures/linked-lists/CircularLinkedList');

describe('Circular Linked List', () => {
    it('should create an empty list', () => {
        const list = new CircularLinkedList();
        assert.strictEqual(list.head, null);
    });

    it('should append elements to the list', () => {
        const list = new CircularLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        const elements = list.display();
        assert.deepStrictEqual(elements, [1, 2, 3]);
    });

    it('should display an empty list as an empty array', () => {
        const list = new CircularLinkedList();
        const elements = list.display();
        assert.deepStrictEqual(elements, []);
    });

    it('should display a list with a single element', () => {
        const list = new CircularLinkedList();
        list.append(42);
        const elements = list.display();
        assert.deepStrictEqual(elements, [42]);
    });
});
