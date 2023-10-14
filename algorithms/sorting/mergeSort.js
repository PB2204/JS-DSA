class MergeSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        if (this.arr.length <= 1) {
            return this.arr;
        }

        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            return result.concat(left.slice(leftIndex), right.slice(rightIndex));
        };

        const middle = Math.floor(this.arr.length / 2);
        const left = this.arr.slice(0, middle);
        const right = this.arr.slice(middle);

        return merge(new MergeSort(left).sort(), new MergeSort(right).sort());
    }
}

module.exports = MergeSort;
