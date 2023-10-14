class GraphNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class BreadthFirstSearch {
    constructor(node) {
        this.node = node;
        this.visited = new Set();
        this.result = [];
    }

    search() {
        if (this.node === null) {
            return this.result; // Return an empty result for an empty graph.
        }

        const queue = [this.node];
        this.visited.add(this.node);

        while (queue.length > 0) {
            const currentNode = queue.shift();

            if (currentNode) {
                this.result.push(currentNode.value);

                for (const child of currentNode.children) {
                    if (!this.visited.has(child)) {
                        this.visited.add(child);
                        queue.push(child);
                    }
                }
            }
        }

        return this.result;
    }
}

module.exports = { GraphNode, BreadthFirstSearch };