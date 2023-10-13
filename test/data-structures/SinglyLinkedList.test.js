const assert = require('assert');
const SinglyLinkedList = require('../../data-structures/linked-lists/SinglyLinkedList');

describe('Singly Linked List', () => {
    it('should create an empty list', () => {
        const list = new SinglyLinkedList();
        assert.strictEqual(list.head, null);
    });

    it('should append elements to the list', () => {
        const list = new SinglyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        const elements = list.display();
        assert.deepStrictEqual(elements, [1, 2, 3]);
    });

    it('should display an empty list as an empty array', () => {
        const list = new SinglyLinkedList();
        const elements = list.display();
        assert.deepStrictEqual(elements, []);
    });

    it('should display a list with a single element', () => {
        const list = new SinglyLinkedList();
        list.append(42);
        const elements = list.display();
        assert.deepStrictEqual(elements, [42]);
    });
});
