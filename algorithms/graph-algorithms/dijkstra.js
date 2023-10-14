class Dijkstra {
    constructor(graph) {
        this.graph = graph;
    }

    findShortestPath(startNode, endNode) {
        const distances = {};
        const previousNodes = {};
        const visited = new Set();
        const queue = [];

        // Initialize distances with Infinity and startNode with 0.
        for (const node in this.graph) {
            distances[node] = Infinity;
            previousNodes[node] = null;
        }
        distances[startNode] = 0;

        queue.push({ node: startNode, distance: distances[startNode] });

        while (queue.length > 0) {
            const { node, distance } = queue.shift();

            if (visited.has(node)) continue;
            visited.add(node);

            for (const neighbor in this.graph[node]) {
                const totalDistance = distance + this.graph[node][neighbor];
                if (totalDistance < distances[neighbor]) {
                    distances[neighbor] = totalDistance;
                    previousNodes[neighbor] = node;
                    queue.push({ node: neighbor, distance: totalDistance });
                }
            }
        }

        return this.constructPath(startNode, endNode, previousNodes);
    }

    constructPath(startNode, endNode, previousNodes) {
        const path = [];
        let currentNode = endNode;

        while (currentNode !== null) {
            path.unshift(currentNode);
            currentNode = previousNodes[currentNode];
        }

        return path;
    }
}

module.exports = Dijkstra;
