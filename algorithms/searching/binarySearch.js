class BinarySearch {
    constructor(arr) {
        this.arr = arr;
    }

    search(target) {
        let left = 0;
        let right = this.arr.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (this.arr[middle] === target) {
                return middle;
            }

            if (this.arr[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return -1;
    }
}

module.exports = BinarySearch;
