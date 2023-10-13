class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the queue.
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element from the queue.
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    // Return the front element of the queue without removing it.
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    // Check if the queue is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the queue.
    size() {
        return this.items.length;
    }
}

module.exports = Queue;
