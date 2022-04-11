import { quickSort, quickSortHoare } from "../sortings/quick_sort";

describe('Quicksort', () => {
    it('Sort', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        quickSort(array);

        expect(array).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });

    it('Sort - Hoares partition', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        quickSortHoare(array);

        expect(array).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });
});