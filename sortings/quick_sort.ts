export function quickSort(array: number[], left: number, right: number) {
    if (left >= right) return;

    const pivot = partition(array, left, right); // Moves pivot to its corect position and returns its index.
    quickSort(array, left, pivot - 1); // Sort left subarray excluding pivot
    quickSort(array, pivot + 1, right); // Sort right subarray excluding pivot
}

function partition(array: number[], left: number, right: number): number {
    const pivot = array[right]; // Takes the rightmost element as pivot.
    let i = left - 1; // Stores maximum index of elements smaller than pivot.
    let j = left;

    while(j < right) {
        if (array[j] < pivot) {
            i ++;
            swap(array, i, j);
        }
        j ++;
    }
    swap(array, i + 1, right); // Places the pivot to its correct position.
    return i + 1;
}

export function quickSortHoare(array: number[], left: number, right: number) {
    if (left >= right) return;

    const pivot = partitionHoare(array, left, right); 
    quickSort(array, left, pivot - 1); 
    quickSort(array, pivot, right); 
}

function partitionHoare(array: number[], left: number, right: number): number {
    const pivotIndex = (left + right) >> 1;
    const pivot = array[pivotIndex];

    while (left < right) {
        while (array[left] < pivot) { left ++; }
        while (array[right] > pivot) { right --; }

        swap(array, left, right);
    }
    return left;
}

function swap(array: number[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}