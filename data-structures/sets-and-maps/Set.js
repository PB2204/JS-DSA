class Set {
    constructor() {
        this.items = {};
    }

    // Add an element to the set.
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    // Remove an element from the set.
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // Check if an element is in the set.
    has(element) {
        return this.items.hasOwnProperty(element);
    }

    // Return an array of all elements in the set.
    values() {
        return Object.values(this.items);
    }

    // Return the size of the set.
    size() {
        return Object.keys(this.items).length;
    }

    // Clear the set.
    clear() {
        this.items = {};
    }
}

module.exports = Set;
