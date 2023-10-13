// Define the Node class for a circular linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = this;
    }
}

// Define the CircularLinkedList class to manage the linked list.
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the end of the linked list.
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tail = this.head; // Change 'const' to 'let'
            while (tail.next !== this.head) {
                tail = tail.next; // Now you can reassign 'tail'
            }
            tail.next = newNode;
            newNode.next = this.head;
        }
    }

    // Display the linked list.
    display() {
        if (!this.head) {
            return [];
        }

        const result = [this.head.data];
        let current = this.head.next;
        while (current !== this.head) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

// Export the CircularLinkedList class for use in other files.
module.exports = CircularLinkedList;
