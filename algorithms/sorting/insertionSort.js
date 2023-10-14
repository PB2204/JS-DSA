class InsertionSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        const n = this.arr.length;

        for (let i = 1; i < n; i++) {
            const key = this.arr[i];
            let j = i - 1;

            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j];
                j--;
            }

            this.arr[j + 1] = key;
        }
    }
}

module.exports = InsertionSort;
