const { GraphNode, DepthFirstSearch } = require("../../../algorithms/searching/depthFirstSearch");

describe("DepthFirstSearch (OOP)", () => {
    it("should perform depth-first search on a tree", () => {
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

        const dfs = new DepthFirstSearch(nodeA);
        const result = dfs.search();
        expect(result).toEqual(["A", "B", "D", "E", "C", "F"]);
    });

    it("should handle a single-node graph", () => {
        const nodeA = new GraphNode("A");
        const dfs = new DepthFirstSearch(nodeA);
        const result = dfs.search();
        expect(result).toEqual(["A"]);
    });

    it("should handle a disconnected graph", () => {
        const nodeA = new GraphNode("A");
        const nodeB = new GraphNode("B");
        const nodeC = new GraphNode("C");
        const nodeD = new GraphNode("D");

        const dfsA = new DepthFirstSearch(nodeA);
        const resultA = dfsA.search();

        const dfsC = new DepthFirstSearch(nodeC);
        const resultC = dfsC.search();

        expect(resultA).toEqual(["A"]);
        expect(resultC).toEqual(["C"]);
    });

    it("should handle an empty graph", () => {
        const nodeA = null;
        const dfs = new DepthFirstSearch(nodeA);
        const result = dfs.search();
        expect(result).toEqual([]);
    });
});
