class RandomizedQuickSort {
    // Randomized partition function
    partition(arr, low, high) {
        const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        const pivot = arr[pivotIndex];
        [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
        let i = low;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        [arr[i], arr[high]] = [arr[high], arr[i]];
        return i;
    }

    // Randomized Quick Sort
    quickSort(arr, low, high) {
        if (low < high) {
            const pivotIndex = this.partition(arr, low, high);
            this.quickSort(arr, low, pivotIndex - 1);
            this.quickSort(arr, pivotIndex + 1, high);
        }
    }

    sort(arr) {
        this.quickSort(arr, 0, arr.length - 1);
        return arr;
    }
}

module.exports = RandomizedQuickSort;
