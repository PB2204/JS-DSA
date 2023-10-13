class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to determine the index in the table.
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert a key-value pair into the hash table.
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    // Retrieve the value associated with a key.
    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let item of this.table[index]) {
                if (item.key === key) {
                    return item.value;
                }
            }
        }
        return null;
    }

    // Remove a key-value pair from the hash table.
    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter((item) => item.key !== key);
        }
    }
}

module.exports = HashTable;
