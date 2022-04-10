"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quick_sort_1 = require("../sortings/quick_sort");
describe('Quicksort', () => {
    it('sort', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        (0, quick_sort_1.quickSort)(array, 0, array.length - 1);
        expect(array).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });
    it('sort - Hoares partition', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        (0, quick_sort_1.quickSortHoare)(array, 0, array.length - 1);
        expect(array).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });
});
//# sourceMappingURL=quicksort_spec.js.map