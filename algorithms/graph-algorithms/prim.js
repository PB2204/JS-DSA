class Prim {
    constructor(graph) {
        this.graph = graph;
    }

    findMinimumSpanningTree() {
        const vertices = Object.keys(this.graph);
        if (vertices.length === 0) {
            return [];
        }

        const mst = [];
        const visited = new Set();
        visited.add(vertices[0]);

        while (visited.size < vertices.length) {
            let minEdge = null;

            for (const vertex of visited) {
                for (const neighbor in this.graph[vertex]) {
                    if (!visited.has(neighbor) && (!minEdge || this.graph[vertex][neighbor] < this.graph[minEdge[0]][minEdge[1]])) {
                        minEdge = [vertex, neighbor];
                    }
                }
            }

            if (minEdge) {
                mst.push([minEdge[0], minEdge[1], this.graph[minEdge[0]][minEdge[1]]]);
                visited.add(minEdge[1]);
            } else {
                break;
            }
        }

        return mst;
    }
}

module.exports = Prim;
