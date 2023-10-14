const assert = require('assert');
const AVLTree = require('../../data-structures/trees/AVLTree');

describe('AVLTree', () => {
    it('should create an empty AVL tree', () => {
        const avlTree = new AVLTree();
        assert.strictEqual(avlTree.root, null);
    });

    it('should insert values into the AVL tree', () => {
        const avlTree = new AVLTree();
        avlTree.insert(10);
        avlTree.insert(5);
        avlTree.insert(15);

        assert.strictEqual(avlTree.root.value, 10);
        assert.strictEqual(avlTree.root.left.value, 5);
        assert.strictEqual(avlTree.root.right.value, 15);
    });
});
