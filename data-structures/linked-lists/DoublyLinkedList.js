// Define the Node class for a doubly linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Define the DoublyLinkedList class to manage the linked list.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new node to the end of the linked list.
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Display the linked list in forward direction.
    displayForward() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    // Display the linked list in reverse direction.
    displayBackward() {
        let current = this.tail;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        return result;
    }
}

// Export the DoublyLinkedList class for use in other files.
module.exports = DoublyLinkedList;
