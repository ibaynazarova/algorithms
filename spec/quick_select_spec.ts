import { quickSelect } from "../selection/quick_select";

describe('Quickselect', () => {
    it('get 0th', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        const val = quickSelect(array, /** k= */ 0);

        expect(val).toEqual(10);
    });

    it('get 3rd', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        const val = quickSelect(array, /** k= */ 3);

        expect(val).toEqual(50);
    });

    it('get 6th', () => {
        let array = [10, 80, 30, 90, 40, 50, 70];
        const val = quickSelect(array, /** k= */ 6);

        expect(val).toEqual(90);
    });
});