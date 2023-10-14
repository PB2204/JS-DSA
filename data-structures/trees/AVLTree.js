class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get the height of a node.
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Update the height of a node based on its children's heights.
    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Get the balance factor of a node (the difference between the heights of its children).
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotation for balancing the AVL tree.
    rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Left rotation for balancing the AVL tree.
    rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Balance the node (perform rotations if needed).
    balance(node) {
        this.updateHeight(node);

        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    // Insert a value into the AVL tree.
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (!node) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        return this.balance(node);
    }
}

module.exports = AVLTree;
