class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).add(vertex2);
            this.vertices.get(vertex2).add(vertex1);
        }
    }

    getVertices() {
        return Array.from(this.vertices.keys());
    }

    getEdges(vertex) {
        if (this.vertices.has(vertex)) {
            return Array.from(this.vertices.get(vertex));
        }
        return [];
    }

    hasVertex(vertex) {
        return this.vertices.has(vertex);
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.vertices.has(vertex1) &&
            this.vertices.get(vertex1).has(vertex2)
        );
    }

    removeVertex(vertex) {
        if (this.vertices.has(vertex)) {
            this.vertices.get(vertex).forEach((neighbor) => {
                this.vertices.get(neighbor).delete(vertex);
            });
            this.vertices.delete(vertex);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.hasEdge(vertex1, vertex2)) {
            this.vertices.get(vertex1).delete(vertex2);
            this.vertices.get(vertex2).delete(vertex1);
        }
    }
}

module.exports = Graph;
