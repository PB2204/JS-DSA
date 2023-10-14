class LinearSearch {
    constructor(arr) {
        this.arr = arr;
    }

    search(target) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === target) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinearSearch;
