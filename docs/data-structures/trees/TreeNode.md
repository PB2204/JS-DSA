**TreeNode Class:**
```javascript
// TreeNode class definition
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Export the TreeNode class
module.exports = TreeNode;
```

**Test Cases:**
```javascript
// Import necessary modules
const assert = require('assert');
const TreeNode = require('../../../data-structures/trees/TreeNode'); // Adjust the import path as needed

// Describe the TreeNode test suite
describe('TreeNode', () => {
    // Test case 1: Create a TreeNode with the given value
    it('should create a TreeNode with the given value', () => {
        const node = new TreeNode(10);
        assert.strictEqual(node.value, 10);
    });

    // Test case 2: Ensure that a TreeNode has null left and right children by default
    it('should have null left and right children by default', () => {
        const node = new TreeNode(20);
        assert.strictEqual(node.left, null);
        assert.strictEqual(node.right, null);
    });

    // Test case 3: Link a TreeNode to left and right children
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
```

These test cases ensure that the `TreeNode` class is correctly creating nodes with values and that the left and right children are initially set to `null`. It also tests the ability to link child nodes to a parent node.

You can run these test cases using a testing framework like Mocha or another testing tool of your choice. Just make sure to adjust the import path to match your project structure.