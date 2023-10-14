const { GraphNode, BreadthFirstSearch } = require("../../../algorithms/searching/breadthFirstSearch");

describe("BreadthFirstSearch (OOP)", () => {
    it("should perform breadth-first search on a tree", () => {
        const nodeA = new GraphNode("A");
        const nodeB = new GraphNode("B");
        const nodeC = new GraphNode("C");
        const nodeD = new GraphNode("D");
        const nodeE = new GraphNode("E");
        const nodeF = new GraphNode("F");

        nodeA.addChild(nodeB);
        nodeA.addChild(nodeC);
        nodeB.addChild(nodeD);
        nodeB.addChild(nodeE);
        nodeC.addChild(nodeF);

        const bfs = new BreadthFirstSearch(nodeA);
        const result = bfs.search();
        expect(result).toEqual(["A", "B", "C", "D", "E", "F"]);
    });

    it("should handle a single-node graph", () => {
        const nodeA = new GraphNode("A");
        const bfs = new BreadthFirstSearch(nodeA);
        const result = bfs.search();
        expect(result).toEqual(["A"]);
    });

    it("should handle a disconnected graph", () => {
        const nodeA = new GraphNode("A");
        const nodeB = new GraphNode("B");
        const nodeC = new GraphNode("C");
        const nodeD = new GraphNode("D");

        const bfsA = new BreadthFirstSearch(nodeA);
        const resultA = bfsA.search();

        const bfsC = new BreadthFirstSearch(nodeC);
        const resultC = bfsC.search();

        expect(resultA).toEqual(["A"]);
        expect(resultC).toEqual(["C"]);
    });

    it("should handle an empty graph", () => {
        const nodeA = null;
        const bfs = new BreadthFirstSearch(nodeA);
        const result = bfs.search();
        expect(result).toEqual([]);
    });
});
