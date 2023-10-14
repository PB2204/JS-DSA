class BubbleSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        const n = this.arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
        }
    }

    swap(i, j) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}

module.exports = BubbleSort;
