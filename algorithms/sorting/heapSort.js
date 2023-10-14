class HeapSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        const n = this.arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [this.arr[0], this.arr[i]] = [this.arr[i], this.arr[0]];
            this.heapify(i, 0);
        }

        return this.arr;
    }

    heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && this.arr[left] > this.arr[largest]) {
            largest = left;
        }

        if (right < n && this.arr[right] > this.arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];
            this.heapify(n, largest);
        }
    }
}

module.exports = HeapSort;
