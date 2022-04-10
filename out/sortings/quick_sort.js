"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSortHoare = exports.quickSort = void 0;
function quickSort(array, left, right) {
    if (left >= right)
        return;
    const pivot = partition(array, left, right); // Moves pivot to its corect position and returns its index.
    quickSort(array, left, pivot - 1); // Sort left subarray excluding pivot
    quickSort(array, pivot + 1, right); // Sort right subarray excluding pivot
}
exports.quickSort = quickSort;
function partition(array, left, right) {
    const pivot = array[right]; // Takes the rightmost element as pivot.
    let i = left - 1; // Stores maximum index of elements smaller than pivot.
    let j = left;
    while (j < right) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
        j++;
    }
    swap(array, i + 1, right); // Places the pivot to its correct position.
    return i + 1;
}
function quickSortHoare(array, left, right) {
    if (left >= right)
        return;
    const pivot = partitionHoare(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot, right);
}
exports.quickSortHoare = quickSortHoare;
function partitionHoare(array, left, right) {
    const pivotIndex = (left + right) >> 1;
    const pivot = array[pivotIndex];
    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        swap(array, left, right);
    }
    return left;
}
function swap(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
//# sourceMappingURL=quick_sort.js.map