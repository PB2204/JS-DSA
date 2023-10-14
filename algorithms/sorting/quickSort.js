class QuickSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        if (this.arr.length <= 1) {
            return this.arr;
        }

        const pivot = this.arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] < pivot) {
                left.push(this.arr[i]);
            } else {
                right.push(this.arr[i]);
            }
        }

        return new QuickSort(left).sort().concat(pivot, new QuickSort(right).sort());
    }
}

module.exports = QuickSort;
