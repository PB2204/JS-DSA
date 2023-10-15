class FloydWarshall {
    constructor(graph) {
        this.graph = graph;
    }

    findShortestPaths() {
        const vertices = Object.keys(this.graph);
        const n = vertices.length;
        const dist = {};

        // Initialize the distance matrix with the direct edge weights
        for (const u of vertices) {
            dist[u] = {};
            for (const v of vertices) {
                dist[u][v] = u === v ? 0 : this.graph[u][v] || Infinity;
            }
        }

        // Floyd-Warshall algorithm
        for (const k of vertices) {
            for (const i of vertices) {
                for (const j of vertices) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        return dist;
    }
}

module.exports = FloydWarshall;
