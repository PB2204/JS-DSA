class DisjointSet {
    constructor() {
        this.parent = new Map();
        this.rank = new Map();
    }

    makeSet(value) {
        if (!this.parent.has(value)) {
            this.parent.set(value, value);
            this.rank.set(value, 0);
        }
    }

    find(value) {
        if (!this.parent.has(value)) {
            return null;
        }

        if (value !== this.parent.get(value)) {
            this.parent.set(value, this.find(this.parent.get(value)));
        }

        return this.parent.get(value);
    }

    union(value1, value2) {
        const root1 = this.find(value1);
        const root2 = this.find(value2);

        if (root1 === null || root2 === null || root1 === root2) {
            return false; // Values are already in the same set or don't exist.
        }

        if (this.rank.get(root1) < this.rank.get(root2)) {
            this.parent.set(root1, root2);
        } else if (this.rank.get(root1) > this.rank.get(root2)) {
            this.parent.set(root2, root1);
        } else {
            this.parent.set(root2, root1);
            this.rank.set(root1, this.rank.get(root1) + 1);
        }

        return true;
    }
}

module.exports = DisjointSet;
