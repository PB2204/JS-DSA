// TreeNode class to represent nodes in the decision tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

// DecisionTree class to represent the decision tree structure
class DecisionTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        // Insert new node into the tree based on some decision logic.
        // This logic depends on your specific use case and dataset.
        // For simplicity, we'll just compare the values.
        if (newNode.value < node.value) {
            if (!node.children[0]) {
                node.addChild(newNode);
            } else {
                this.insertNode(node.children[0], newNode);
            }
        } else {
            if (!node.children[1]) {
                node.addChild(newNode);
            } else {
                this.insertNode(node.children[1], newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (node.value === value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.children[0], value);
        } else {
            return this.searchNode(node.children[1], value);
        }
    }
}

module.exports = DecisionTree;
