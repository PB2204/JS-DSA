class TopologicalSort {
    constructor(graph) {
        this.graph = graph;
        this.visited = new Set();
        this.stack = [];
    }

    // Helper function for topological sorting
    topologicalSortUtil(node) {
        this.visited.add(node);

        for (const neighbor of this.graph[node]) {
            if (!this.visited.has(neighbor)) {
                this.topologicalSortUtil(neighbor);
            }
        }

        this.stack.unshift(node);
    }

    // Perform topological sorting
    performTopologicalSort() {
        for (const node in this.graph) {
            if (!this.visited.has(node)) {
                this.topologicalSortUtil(node);
            }
        }

        return this.stack;
    }
}

module.exports = TopologicalSort;
