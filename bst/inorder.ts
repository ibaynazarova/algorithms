import { Node } from './node';

export function inorder<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    const inorder_ = (node: Node<T>|null) => {
        if (node == null) return;
        inorder_(node.left);
        traversal.push(node.value);
        inorder_(node.right);
    };

    inorder_(node);
    return traversal;
}
