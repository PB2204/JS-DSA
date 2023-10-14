const RED = 'red';
const BLACK = 'black';

class TreeNode {
    constructor(value, color = RED) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.NIL = new TreeNode(null, BLACK);
        this.root = this.NIL;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        let parent = null;
        let current = this.root;

        while (current !== this.NIL) {
            parent = current;
            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;

        if (!parent) {
            this.root = newNode;
        } else if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        if (newNode !== this.NIL) {
            this.insertFixup(newNode);
        }
    }

    insertFixup(node) {
        while (node !== this.root && node.color === RED && node.parent.color === RED) {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;
    
                if (uncle && uncle.color === RED) {
                    node.parent.color = BLACK;
                    uncle.color = BLACK;
                    node.parent.parent.color = RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
    
                    node.parent.color = BLACK;
                    node.parent.parent.color = RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
    
                if (uncle && uncle.color === RED) {
                    node.parent.color = BLACK;
                    uncle.color = BLACK;
                    node.parent.parent.color = RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
    
                    node.parent.color = BLACK;
                    node.parent.parent.color = RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
    
        this.root.color = BLACK;
    }

    rotateLeft(node) {
        const right = node.right;
        node.right = right.left;

        if (right.left !== this.NIL) {
            right.left.parent = node;
        }

        right.parent = node.parent;

        if (!node.parent) {
            this.root = right;
        } else if (node === node.parent.left) {
            node.parent.left = right;
        } else {
            node.parent.right = right;
        }

        right.left = node;
        node.parent = right;
    }

    rotateRight(node) {
        const left = node.left;
        node.left = left.right;

        if (left.right !== this.NIL) {
            left.right.parent = node;
        }

        left.parent = node.parent;

        if (!node.parent) {
            this.root = left;
        } else if (node === node.parent.right) {
            node.parent.right = left;
        } else {
            node.parent.left = left;
        }

        left.right = node;
        node.parent = left;
    }
}

module.exports = RedBlackTree;
