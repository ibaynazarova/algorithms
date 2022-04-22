import { Node } from './node';

export function postorder<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    const postorder_ = (node: Node<T>|null) => {
        if (node == null) return;
        postorder_(node.left);
        postorder_(node.right);
        traversal.push(node.value);     
    };

    postorder_(node);
    return traversal;
}
