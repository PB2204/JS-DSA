const FloydWarshall = require('../../../algorithms/graph-algorithms/floydWarshall');

describe('Floyd-Warshall (OOP)', () => {
    it('should find the shortest paths in a graph', () => {
        const graph = {
            A: { B: 2, C: 4 },
            B: { D: 7 },
            C: { D: 1 },
            D: { E: 3 },
            E: {},
        };

        const floydWarshall = new FloydWarshall(graph);
        const shortestPaths = floydWarshall.findShortestPaths();

        expect(shortestPaths).toEqual({
            A: { A: 0, B: 2, C: 4, D: 5, E: 8 },
            B: { A: Infinity, B: 0, C: Infinity, D: 7, E: 10 },
            C: { A: Infinity, B: Infinity, C: 0, D: 1, E: 4 },
            D: { A: Infinity, B: Infinity, C: Infinity, D: 0, E: 3 },
            E: { A: Infinity, B: Infinity, C: Infinity, D: Infinity, E: 0 },
        });
    });

    it('should handle an empty graph', () => {
        const graph = {};

        const floydWarshall = new FloydWarshall(graph);
        const shortestPaths = floydWarshall.findShortestPaths();

        expect(shortestPaths).toEqual({});
    });

    it('should handle a graph with a single vertex', () => {
        const graph = { A: {} };

        const floydWarshall = new FloydWarshall(graph);
        const shortestPaths = floydWarshall.findShortestPaths();

        expect(shortestPaths).toEqual({ A: { A: 0 } });
    });

    it('should handle a graph with no path between two nodes', () => {
        const graph = {
            A: {},
            B: {},
        };

        const floydWarshall = new FloydWarshall(graph);
        const shortestPaths = floydWarshall.findShortestPaths();

        expect(shortestPaths).toEqual({
            A: { A: 0, B: Infinity },
            B: { A: Infinity, B: 0 },
        });
    });

    it('should handle a graph with negative edge weights', () => {
        const graph = {
            A: { B: -2, C: 4 },
            B: { C: 1, D: -7 },
            C: { D: 3, E: 5 },
            D: { E: 2 },
            E: {},
        };

        const floydWarshall = new FloydWarshall(graph);
        const shortestPaths = floydWarshall.findShortestPaths();

        expect(shortestPaths).toEqual({
            A: { A: 0, B: -2, C: -1, D: -9, E: -7 },
            B: { A: Infinity, B: 0, C: 1, D: -7, E: -5 },
            C: { A: Infinity, B: Infinity, C: 0, D: 3, E: 5 },
            D: { A: Infinity, B: Infinity, C: Infinity, D: 0, E: 2 },
            E: { A: Infinity, B: Infinity, C: Infinity, D: Infinity, E: 0 },
        });
    });
});
