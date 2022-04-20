import { Node } from './node';

export function inorderMorris<T>(node: Node<T>): Array<T> {   
    const traversal: Array<T> = [];
    let current: Node<T>|null = node;

    while (current != null) {
      
        if (current.left != null) {
            const leftBranch: Node<T> = current.left;
            let rightMost: Node<T> = leftBranch;

            while (true) {
                // Establish a new link
                if (rightMost.right == null) {
                    rightMost.right = current;
                    current = current!.left;
                    break;
                }
                // Visit a node and remove an old link
                if (rightMost.right === current) {
                    rightMost.right = null;                  
                    traversal.push(current!.value);
                    current = current!.right;
                    break;
                }
                rightMost = rightMost.right!;
            }      
        }
        // Visit a node and go to the right
        else {
            traversal.push(current.value);
            current = current.right;
        }
    }
    
    return traversal;
}
