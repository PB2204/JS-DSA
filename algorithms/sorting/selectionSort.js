class SelectionSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        const n = this.arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < n; j++) {
                if (this.arr[j] < this.arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                this.swap(i, minIndex);
            }
        }
    }

    swap(i, j) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}

module.exports = SelectionSort;
