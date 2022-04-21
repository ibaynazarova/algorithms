import { Node } from './node';

// Node -> Left -> Right
export function preorderIterative<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    let current: Node<T>|null = null;
    let callStack: Array<Node<T>> = [node];

    while (callStack.length !== 0) {
        current = callStack.pop()!;
        traversal.push(current.value);
        
        if (current.right != null) {
            callStack.push(current.right);
        }
        if (current.left != null) {
            callStack.push(current.left);
        }
    }

    return traversal;
}
