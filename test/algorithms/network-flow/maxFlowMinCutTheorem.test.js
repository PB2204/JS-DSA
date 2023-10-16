const MaxFlowMinCutGraph = require('../../../algorithms/network-flow/maxFlowMinCutTheorem');

describe('Max Flow Min Cut Theorem', () => {
    it('should find the maximum flow in a flow network', () => {
        const graph = new MaxFlowMinCutGraph(6);

        graph.addEdge(0, 1, 10);
        graph.addEdge(0, 2, 10);
        graph.addEdge(1, 2, 2);
        graph.addEdge(1, 3, 4);
        graph.addEdge(1, 4, 8);
        graph.addEdge(2, 4, 9);
        graph.addEdge(3, 5, 10);
        graph.addEdge(4, 3, 6);
        graph.addEdge(4, 5, 10);

        const maxFlow = graph.fordFulkerson(0, 5);
        expect(maxFlow).toEqual(19);
    });
});
