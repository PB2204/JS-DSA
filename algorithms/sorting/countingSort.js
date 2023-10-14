class CountingSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        if (this.arr.length <= 1) return this.arr;

        const max = Math.max(...this.arr);
        const min = Math.min(...this.arr);

        const range = max - min + 1;
        const count = new Array(range).fill(0);
        const output = new Array(this.arr.length);

        for (let i = 0; i < this.arr.length; i++) {
            count[this.arr[i] - min]++;
        }

        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        for (let i = this.arr.length - 1; i >= 0; i--) {
            output[count[this.arr[i] - min] - 1] = this.arr[i];
            count[this.arr[i] - min]--;
        }

        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = output[i];
        }

        return this.arr;
    }
}

module.exports = CountingSort;
