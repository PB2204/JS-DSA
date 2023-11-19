/**
 * Tim Sort algorithm implementation in JavaScript.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - Sorted array.
 */
function timSort(arr) {
  const RUN = 32; // Minimum size of a run

  /**
   * This function sorts the array from the start index to
   * the end index using insertion sort.
   *
   * @param {number} start - Start index of the run.
   * @param {number} end - End index of the run.
   */
  function insertionSort(start, end) {
    for (let i = start + 1; i <= end; i++) {
      const temp = arr[i];
      let j = i - 1;
      while (j >= start && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }

  /**
   * Merge function to merge two sorted runs.
   *
   * @param {number} start - Start index of the first run.
   * @param {number} mid - End index of the first run.
   * @param {number} end - End index of the second run.
   */
  function mergeRuns(start, mid, end) {
    const len1 = mid - start + 1;
    const len2 = end - mid;
    const leftRun = new Array(len1);
    const rightRun = new Array(len2);

    for (let i = 0; i < len1; i++)
      leftRun[i] = arr[start + i];
    for (let i = 0; i < len2; i++)
      rightRun[i] = arr[mid + 1 + i];

    let i = 0,
      j = 0,
      k = start;

    while (i < len1 && j < len2) {
      if (leftRun[i] <= rightRun[j]) {
        arr[k] = leftRun[i];
        i++;
      } else {
        arr[k] = rightRun[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of leftRun[], if any
    while (i < len1) {
      arr[k] = leftRun[i];
      i++;
      k++;
    }

    // Copy remaining elements of rightRun[], if any
    while (j < len2) {
      arr[k] = rightRun[j];
      j++;
      k++;
    }
  }

  const n = arr.length;

  // Sort individual subarrays of size RUN
  for (let i = 0; i < n; i += RUN)
    insertionSort(i, Math.min(i + RUN - 1, n - 1));

  // Start merging from size RUN (or 32 in this case) and double the size at each step
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      mergeRuns(left, mid, right);
    }
  }

  return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = timSort(unsortedArray);
console.log('Sorted Array:', sortedArray);
