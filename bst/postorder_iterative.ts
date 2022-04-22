import { Node } from './node';

// Left -> Right -> Node
export function postorderIterative<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    let current: Node<T>|null = node;
    let stack: Array<Node<T>> = [node];
    let out: Array<Node<T>> = [];

    while (stack.length !== 0) {
        current = stack.pop()!;
        out.push(current);
        if (current.left) {
            stack.push(current.left);
        }
        if (current.right) {
            stack.push(current.right);
        }
    }

    while (out.length !== 0) {
        let item = out.pop()!;
        traversal.push(item.value);
    }
    
    return traversal;
}

export function postOrderIterativeOneStack<T>(node: Node<T>): Array<T> {
    const traversal: Array<T> = [];
    let current: Node<T>|null = node;
    let stack: Array<Node<T>> = [node];

    while (true) {
        current = stack.pop()!;
        if (current.left != null) {
            stack.push(current.left);
        }
        if (current.right != null) {
            stack.push(current.right);
        }

        stack.unshift(current);
        if (stack[stack.length - 1] === node) break;
    }

    while (stack.length !== 0) {
        let item = stack.shift()!;
        traversal.push(item.value);
    }

    return traversal;
}