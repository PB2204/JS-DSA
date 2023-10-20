class InterpolationSearch {
    constructor(arr) {
        this.arr = arr;
    }

    search(target) {
        let low = 0;
        let high = this.arr.length - 1;

        while (low <= high && target >= this.arr[low] && target <= this.arr[high]) {
            if (low === high) {
                if (this.arr[low] === target) return low;
                return -1;
            }

            const pos = Math.floor(
                low + ((target - this.arr[low]) / (this.arr[high] - this.arr[low])) * (high - low)
            );

            if (this.arr[pos] === target) return pos;
            if (this.arr[pos] < target) low = pos + 1;
            else high = pos - 1;
        }

        return -1;
    }
}
module.exports = InterpolationSearch;
