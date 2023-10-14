const assert = require('assert');
const BinaryTree = require('../../data-structures/trees/BinaryTree');

describe('BinaryTree', () => {
    it('should create an empty binary tree', () => {
        const tree = new BinaryTree();
        assert.strictEqual(tree.root, null);
    });

    it('should insert values into the binary tree', () => {
        const tree = new BinaryTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);

        assert.strictEqual(tree.root.value, 10);
        assert.strictEqual(tree.root.left.value, 5);
        assert.strictEqual(tree.root.right.value, 15);
    });

    it('should search for values in the binary tree', () => {
        const tree = new BinaryTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);

        assert.strictEqual(tree.search(5), true);
        assert.strictEqual(tree.search(20), false);
    });

    it('should perform in-order traversal of the binary tree', () => {
        const tree = new BinaryTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);

        const result = tree.inOrderTraversal();
        assert.deepStrictEqual(result, [3, 5, 7, 10, 15]);
    });
});
