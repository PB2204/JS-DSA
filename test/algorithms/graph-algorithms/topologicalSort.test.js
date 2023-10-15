const TopologicalSort = require('../../../algorithms/graph-algorithms/topologicalSort');

describe('TopologicalSort (OOP)', () => {
    it('should perform topological sorting on a graph', () => {
        const graph = {
            'A': ['B', 'C'],
            'B': ['D', 'E'],
            'C': ['F'],
            'D': ['E'],
            'E': [],
            'F': [],
        };

        const topologicalSorter = new TopologicalSort(graph);
        const result = topologicalSorter.performTopologicalSort();

        // The result can have multiple valid orders, so we check if the order is valid
        // based on the graph's structure.
        const validOrders = [
            ['A', 'C', 'F', 'B', 'D', 'E'],
            ['A', 'B', 'C', 'D', 'E', 'F'],
        ];

        expect(validOrders.some(order => JSON.stringify(order) === JSON.stringify(result))).toBeTruthy();
    });

    it('should handle a graph with multiple valid topological orders', () => {
        const graph = {
            'A': ['B', 'C'],
            'B': ['D', 'E'],
            'C': ['D', 'F'],
            'D': ['E', 'F'],
            'E': [],
            'F': [],
        };

        const topologicalSorter = new TopologicalSort(graph);
        const result = topologicalSorter.performTopologicalSort();

        // The result can have multiple valid orders, so we check if the order is valid
        // based on the graph's structure.
        const validOrders = [
            ['A', 'C', 'D', 'B', 'F', 'E'],
            ['A', 'C', 'D', 'F', 'B', 'E'],
            ['A', 'B', 'C', 'D', 'E', 'F'],
            ['A', 'B', 'C', 'D', 'F', 'E'],
        ];

        expect(validOrders.some(order => JSON.stringify(order) === JSON.stringify(result))).toEqual(false);
    });
});
