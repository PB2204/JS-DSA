class MaxFlowMinCutGraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjacencyMatrix = Array.from({ length: vertices }, () =>
            Array(vertices).fill(0)
        );
    }

    addEdge(source, target, capacity) {
        this.adjacencyMatrix[source][target] = capacity;
    }

    fordFulkerson(source, sink) {
        let parent = new Array(this.vertices).fill(-1);
        let maxFlow = 0;

        while (this.bfs(source, sink, parent)) {
            let pathFlow = Number.POSITIVE_INFINITY;
            let s = sink;

            while (s !== source) {
                let u = parent[s];
                pathFlow = Math.min(pathFlow, this.adjacencyMatrix[u][s]);
                s = u;
            }

            maxFlow += pathFlow;

            let v = sink;
            while (v !== source) {
                let u = parent[v];
                this.adjacencyMatrix[u][v] -= pathFlow;
                this.adjacencyMatrix[v][u] += pathFlow;
                v = u;
            }
        }

        return maxFlow;
    }

    bfs(source, sink, parent) {
        let visited = new Array(this.vertices).fill(false);
        let queue = [];
        queue.push(source);
        visited[source] = true;

        while (queue.length !== 0) {
            let u = queue.shift();
            for (let v = 0; v < this.vertices; v++) {
                if (!visited[v] && this.adjacencyMatrix[u][v] > 0) {
                    queue.push(v);
                    parent[v] = u;
                    visited[v] = true;
                }
            }
        }

        return visited[sink];
    }
}

module.exports = MaxFlowMinCutGraph;
