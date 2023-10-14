const assert = require('assert');
const TreeNode = require('../../../data-structures/trees/TreeNode');

describe('TreeNode', () => {
    it('should create a TreeNode with the given value', () => {
        const node = new TreeNode(10);
        assert.strictEqual(node.value, 10);
    });

    it('should have null left and right children by default', () => {
        const node = new TreeNode(20);
        assert.strictEqual(node.left, null);
        assert.strictEqual(node.right, null);
    });

    it('should link to left and right children', () => {
        const node = new TreeNode(30);
        const leftChild = new TreeNode(15);
        const rightChild = new TreeNode(45);

        node.left = leftChild;
        node.right = rightChild;

        assert.strictEqual(node.left.value, 15);
        assert.strictEqual(node.right.value, 45);
    });
});
