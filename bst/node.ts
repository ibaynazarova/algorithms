export class Node<T> {
    value: T;
    left: Node<T>|null;
    right: Node<T>|null;

    constructor(value: T, left?: Node<T>, right?: Node<T>) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}