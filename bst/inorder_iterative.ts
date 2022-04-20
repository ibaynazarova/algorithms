import { Node } from './node';

export function inorderItertive<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    const callStack = [];
    let current: Node<T>|null = node;

    while (true) {
        // left recursion
        while (current != null) {
            callStack.push(current);
            current = current.left;
        }
        // Brakes the infinite loop when call stack became empty. 
        if (callStack.length === 0) break;
        // visit current
        current = callStack.pop()!;
        traversal.push(current.value);
        // right recursion
        current = current.right;
    }
    
    return traversal;
}
