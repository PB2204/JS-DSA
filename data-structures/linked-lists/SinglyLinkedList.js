// Define the Node class for a singly linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define the SinglyLinkedList class to manage the linked list.
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the end of the linked list.
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Display the linked list.
    display() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

// Export the SinglyLinkedList class for use in other files.
module.exports = SinglyLinkedList;
