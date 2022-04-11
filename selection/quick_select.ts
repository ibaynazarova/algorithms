import { partition } from "../sortings/quick_sort";

export function quickSelect(array: number[], k: number, left: number = 0, right: number = array.length - 1): number {  
    if (left === right) return array[left];

    const pivot = partition(array, left, right);
    
    if (k == pivot) return array[k];
    else if (pivot < k) {
        return quickSelect(array, k, pivot + 1, right);
    }
    else {
        return quickSelect(array, k, left, pivot - 1);
    }
}