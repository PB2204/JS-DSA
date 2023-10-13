class Map {
    constructor() {
        this.items = {};
    }

    // Add a key-value pair to the map.
    set(key, value) {
        this.items[key] = value;
    }

    // Get the value associated with a key.
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    // Check if a key exists in the map.
    has(key) {
        return key in this.items;
    }

    // Remove a key-value pair from the map.
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }

    // Return an array of all keys in the map.
    keys() {
        return Object.keys(this.items);
    }

    // Return an array of all values in the map.
    values() {
        return Object.values(this.items);
    }

    // Return the number of key-value pairs in the map.
    size() {
        return Object.keys(this.items).length;
    }

    // Clear the map.
    clear() {
        this.items = {};
    }
}

module.exports = Map;
