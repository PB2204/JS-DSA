class FordFulkerson {
    constructor(graph) {
        this.graph = graph;
        this.visited = new Set();
    }

    maxFlow(source, sink) {
        let maxFlow = 0;
        let path = this.findAugmentingPath(source, sink);

        while (path) {
            const minCapacity = this.findMinCapacity(path);
            this.updateResidualGraph(path, minCapacity);
            maxFlow += minCapacity;
            this.visited.clear();
            path = this.findAugmentingPath(source, sink);
        }

        return maxFlow;
    }

    findAugmentingPath(source, sink) {
        const queue = [[source]];
        this.visited.add(source);

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === sink) {
                return path;
            }

            const neighbors = this.graph.getNeighbors(node);
            for (const neighbor of neighbors) {
                if (!this.visited.has(neighbor) && this.graph.getCapacity(node, neighbor) > 0) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                    this.visited.add(neighbor);
                }
            }
        }

        return null;
    }

    findMinCapacity(path) {
        let minCapacity = Infinity;

        for (let i = 0; i < path.length - 1; i++) {
            const capacity = this.graph.getCapacity(path[i], path[i + 1]);
            minCapacity = Math.min(minCapacity, capacity);
        }

        return minCapacity;
    }

    updateResidualGraph(path, minCapacity) {
        for (let i = 0; i < path.length - 1; i++) {
            this.graph.updateCapacity(path[i], path[i + 1], -minCapacity);
            this.graph.updateCapacity(path[i + 1], path[i], minCapacity);
        }
    }
}

module.exports = FordFulkerson;
