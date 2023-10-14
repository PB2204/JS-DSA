```bash
JS-DSA/
|-- data-structures/
|   |-- linked-lists/
|   |   |-- SinglyLinkedList.js
|   |   |-- DoublyLinkedList.js
|   |   |-- CircularLinkedList.js
|   |-- stacks-and-queues/
|   |   |-- Stack.js
|   |   |-- Queue.js
|   |-- hash-tables/
|   |   |-- HashTable.js
|   |-- sets-and-maps/
|   |   |-- Set.js
|   |   |-- Map.js
|   |-- trees/
|   |   |-- BinaryTree.js
|   |   |-- AVLTree.js
|   |   |-- RedBlackTree.js
|   |   |-- TreeNode.js
|   |-- heaps/
|   |   |-- MinHeap.js
|   |   |-- MaxHeap.js
|   |-- graphs/
|   |   |-- Graph.js
|   |   |-- GraphNode.js
|   |-- disjoint-set/
|   |   |-- DisjointSet.js
|   |-- trie/
|       |-- Trie.js
|
|-- algorithms/
|   |-- sorting/
|   |   |-- bubbleSort.js
|   |   |-- selectionSort.js
|   |   |-- insertionSort.js
|   |   |-- mergeSort.js
|   |   |-- quickSort.js
|   |   |-- heapSort.js
|   |   |-- radixSort.js
|   |   |-- countingSort.js
|   |-- searching/
|   |   |-- linearSearch.js
|   |   |-- binarySearch.js
|   |   |-- depthFirstSearch.js
|   |   |-- breadthFirstSearch.js
|   |-- graph-algorithms/
|   |   |-- dijkstra.js
|   |   |-- bellmanFord.js
|   |   |-- kruskal.js
|   |   |-- prim.js
|   |   |-- floydWarshall.js
|   |   |-- topologicalSort.js
|   |-- dynamic-programming/
|   |   |-- fibonacci.js
|   |   |-- longestCommonSubsequence.js
|   |   |-- knapsack.js
|   |   |-- editDistance.js
|   |   |-- matrixChainMultiplication.js
|   |-- string/
|   |   |-- stringMatching.js
|   |   |-- levenshteinDistance.js
|   |   |-- longestCommonSubstring.js
|   |-- geometry/
|   |   |-- convexHull.js
|   |   |-- closestPairOfPoints.js
|   |   |-- lineIntersection.js
|   |-- network-flow/
|   |   |-- fordFulkerson.js
|   |   |-- maxFlowMinCutTheorem.js
|   |-- numerical/
|   |   |-- gcd.js
|   |   |-- primalityTesting.js
|   |   |-- fastExponentiation.js
|   |-- ml-statistical/
|   |   |-- kMeansClustering.js
|   |   |-- linearRegression.js
|   |   |-- logisticRegression.js
|   |   |-- decisionTrees.js
|   |-- randomized/
|   |   |-- randomizedQuickSort.js
|   |   |-- randomizedPrimalityTesting.js
|   |-- cryptography/
|       |-- rsaEncryption.js
|       |-- rsaDecryption.js
|       |-- aesEncryption.js
|       |-- aesDecryption.js
|
|-- utils/
|   |-- utilityFunctions.js
|
|-- index.js
|-- package.json
|-- README.md
|-- LICENSE
|-- .gitignore
|-- test/
|   |-- data-structures/
|   |   |-- linked-lists/
|   |   |   |-- SinglyLinkedList.test.js
|   |   |   |-- DoublyLinkedList.test.js
|   |   |   |-- CircularLinkedList.test.js
|   |   |-- stacks-and-queues/
|   |   |   |-- Stack.test.js
|   |   |   |-- Queue.test.js
|   |   |-- hash-tables/
|   |   |   |-- HashTable.test.js
|   |   |-- sets-and-maps/
|   |   |   |-- Set.test.js
|   |   |   |-- Map.test.js
|   |   |-- trees/
|   |   |   |-- BinaryTree.test.js
|   |   |   |-- AVLTree.test.js
|   |   |   |-- RedBlackTree.test.js
|   |   |   |-- TreeNode.test.js
|   |   |-- heaps/
|   |   |   |-- MinHeap.test.js
|   |   |   |-- MaxHeap.test.js
|   |   |-- graphs/
|   |   |   |-- Graph.test.js
|   |   |   |-- GraphNode.test.js
|   |   |-- disjoint-set/
|   |   |   |-- DisjointSet.test.js
|   |   |-- trie/
|   |   |   |-- Trie.test.js
|   |
|   |-- algorithms/
|   |   |-- sorting/
|   |   |   |-- bubbleSort.test.js
|   |   |   |-- selectionSort.test.js
|   |   |   |-- insertionSort.test.js
|   |   |   |-- mergeSort.test.js
|   |   |   |-- quickSort.test.js
|   |   |   |-- heapSort.test.js
|   |   |   |-- radixSort.test.js
|   |   |   |-- countingSort.test.js
|   |   |-- searching/
|   |   |   |-- linearSearch.test.js
|   |   |   |-- binarySearch.test.js
|   |   |   |-- depthFirstSearch.test.js
|   |   |   |-- breadthFirstSearch.test.js
|   |   |-- graph-algorithms/
|   |   |   |-- dijkstra.test.js
|   |   |   |-- bellmanFord.test.js
|   |   |   |-- kruskal.test.js
|   |   |   |-- prim.test.js
|   |   |   |-- floydWarshall.test.js
|   |   |   |-- topologicalSort.test.js
|   |   |-- dynamic-programming/
|   |   |   |-- fibonacci.test.js
|   |   |   |-- longestCommonSubsequence.test.js
|   |   |   |-- knapsack.test.js
|   |   |   |-- editDistance.test.js
|   |   |   |-- matrixChainMultiplication.test.js
|   |   |-- string/
|   |   |   |-- stringMatching.test.js
|   |   |   |-- levenshteinDistance.test.js
|   |   |   |-- longestCommonSubstring.test.js
|   |   |-- geometry/
|   |   |   |-- convexHull.test.js
|   |   |   |-- closestPairOfPoints.test.js
|   |   |   |-- lineIntersection.test.js
|   |   |-- network-flow/
|   |   |   |-- fordFulkerson.test.js
|   |   |   |-- maxFlowMinCutTheorem.test.js
|   |   |-- numerical/
|   |   |   |-- gcd.test.js
|   |   |   |-- primalityTesting.test.js
|   |   |   |-- fastExponentiation.test.js
|   |   |-- ml-statistical/
|   |   |   |-- kMeansClustering.test.js
|   |   |   |-- linearRegression.test.js
|   |   |   |-- logisticRegression.test.js
|   |   |   |-- decisionTrees.test.js
|   |   |-- randomized/
|   |   |   |-- randomizedQuickSort.test.js
|   |   |   |-- randomizedPrimalityTesting.test.js
|   |   |-- cryptography/
|   |       |-- rsaEncryption.test.js
|   |       |-- rsaDecryption.test.js
|   |       |-- aesEncryption.test.js
|   |       |-- aesDecryption.test.js
|
|-- docs/
    |-- data-structures.md
    |-- algorithms.md
    |-- usage-examples.md
    ```