class BellmanFord {
    constructor(graph) {
        this.graph = graph;
    }

    findShortestPath(source) {
        const distance = {};
        const predecessor = {};
        const vertices = Object.keys(this.graph);

        // Initialize distances and predecessors
        for (const vertex of vertices) {
            distance[vertex] = vertex === source ? 0 : Infinity;
            predecessor[vertex] = null;
        }

        // Relax edges repeatedly
        for (let i = 0; i < vertices.length - 1; i++) {
            for (const u of vertices) {
                for (const v in this.graph[u]) {
                    const weight = this.graph[u][v];
                    if (distance[u] + weight < distance[v]) {
                        distance[v] = distance[u] + weight;
                        predecessor[v] = u;
                    }
                }
            }
        }

        // Check for negative weight cycles
        for (const u of vertices) {
            for (const v in this.graph[u]) {
                const weight = this.graph[u][v];
                if (distance[u] + weight < distance[v]) {
                    throw new Error('Graph contains a negative weight cycle');
                }
            }
        }

        return { distance, predecessor };
    }
}

module.exports = BellmanFord;
