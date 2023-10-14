class Kruskal {
    constructor(graph) {
        this.graph = graph;
    }

    findMinimumSpanningTree() {
        const edges = this.getSortedEdges();
        const mst = new Set();
        const parent = {};

        const find = (node) => {
            if (parent[node] === undefined) return node;
            return find(parent[node]);
        };

        for (const edge of edges) {
            const [u, v, weight] = edge;
            const parentU = find(u);
            const parentV = find(v);

            if (parentU !== parentV) {
                mst.add(edge);
                parent[parentU] = parentV;
            }
        }

        return Array.from(mst);
    }

    getSortedEdges() {
        const edges = [];
        for (const node in this.graph) {
            for (const neighbor in this.graph[node]) {
                edges.push([node, neighbor, this.graph[node][neighbor]]);
            }
        }

        return edges.sort((a, b) => a[2] - b[2]);
    }
}

module.exports = Kruskal;
