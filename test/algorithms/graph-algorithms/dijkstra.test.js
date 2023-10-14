const Dijkstra = require('../../../algorithms/graph-algorithms/dijkstra');

describe('Dijkstra (OOP)', () => {
    it('should find the shortest path in a graph', () => {
        const graph = {
            A: { B: 2, C: 4 },
            B: { D: 7 },
            C: { D: 1 },
            D: { E: 3 },
            E: {},
        };

        const dijkstra = new Dijkstra(graph);
        const shortestPath = dijkstra.findShortestPath('A', 'E');

        expect(shortestPath).toEqual(['A', 'C', 'D', 'E']);
    });

    it('should handle a graph with no path between two nodes', () => {
        const graph = {
            A: { B: 2 },
            B: {},
        };

        const dijkstra = new Dijkstra(graph);
        const shortestPath = dijkstra.findShortestPath('A', 'B');

        expect(shortestPath).toEqual(['A','B']);
    });

    it('should handle a graph with negative edge weights', () => {
        const graph = {
            A: { B: 2, C: -1 },
            B: { D: -2 },
            C: { D: 1 },
            D: { E: -3 },
            E: {},
        };

        const dijkstra = new Dijkstra(graph);
        const shortestPath = dijkstra.findShortestPath('A', 'E');

        expect(shortestPath).toEqual(['A', 'B', 'D', 'E']);
    });

    it('should handle a graph with the same weight for all edges', () => {
        const graph = {
            A: { B: 1, C: 1 },
            B: { D: 1 },
            C: { D: 1 },
            D: { E: 1 },
            E: {},
        };

        const dijkstra = new Dijkstra(graph);
        const shortestPath = dijkstra.findShortestPath('A', 'E');

        expect(shortestPath).toEqual(['A', 'B', 'D', 'E']);
    });

    it('should handle a graph with only one node', () => {
        const graph = {
            A: {},
        };

        const dijkstra = new Dijkstra(graph);
        const shortestPath = dijkstra.findShortestPath('A', 'A');

        expect(shortestPath).toEqual(['A']);
    });
});
