class RadixSort {
    constructor(arr) {
        this.arr = arr;
    }

    getMax() {
        let max = this.arr[0];
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
            }
        }
        return max;
    }

    countSort(exp) {
        const n = this.arr.length;
        const output = new Array(n).fill(0);
        const count = new Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            count[Math.floor(this.arr[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(this.arr[i] / exp) % 10] - 1] = this.arr[i];
            count[Math.floor(this.arr[i] / exp) % 10]--;
        }

        for (let i = 0; i < n; i++) {
            this.arr[i] = output[i];
        }
    }

    sort() {
        const max = this.getMax();

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.countSort(exp);
        }

        return this.arr;
    }
}

module.exports = RadixSort;
