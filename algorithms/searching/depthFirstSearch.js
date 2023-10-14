class GraphNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class DepthFirstSearch {
    constructor(node) {
        this.node = node;
        this.visited = new Set();
        this.result = [];
    }

    search() {
        this.dfs(this.node);
        return this.result;
    }

    dfs(node) {
        if (node === null) return;
        this.visited.add(node);
        this.result.push(node.value);

        for (const child of node.children) {
            if (!this.visited.has(child)) {
                this.dfs(child);
            }
        }
    }
}

module.exports = { GraphNode, DepthFirstSearch };
