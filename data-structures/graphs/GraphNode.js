class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = new Set();
    }

    addNeighbor(neighborNode) {
        this.neighbors.add(neighborNode);
        neighborNode.neighbors.add(this);
    }

    removeNeighbor(neighborNode) {
        this.neighbors.delete(neighborNode);
        neighborNode.neighbors.delete(this);
    }

    getNeighbors() {
        return Array.from(this.neighbors);
    }
}

module.exports = GraphNode;
