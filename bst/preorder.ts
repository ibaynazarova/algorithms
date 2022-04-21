import { Node } from './node';

// Node -> Left -> Right
export function preorder<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    const preorder_ = (node: Node<T>|null) => {
        if (node == null) return;
        traversal.push(node.value);
        preorder_(node.left);  
        preorder_(node.right);
    };

    preorder_(node);
    return traversal;
}
