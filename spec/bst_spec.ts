import {Node} from '../bst/node';
import {inorder} from '../bst/inorder';
import {inorderItertive} from '../bst/inorder_iterative';
import {inorderMorris} from '../bst/inorder_morris';

/**
 *       5
 *     /   \
 *    2     6
 *   /  \
 *  1    3
 *        \
 *         4
 * */
describe('BST', () => {
    let root: Node<number>|null = null;
    beforeEach(() => {       
        let node1 = new Node(1);
        let node4 = new Node(4);
        let node3 = new Node(3, undefined, node4);
        let node2 = new Node(2, node1, node3);
        let node6 = new Node(6);
        root = new Node(5, node2, node6);
    });

    it('inorder - recursive', () => {
        const traversal: number[] = inorder(root!);

        expect(traversal).toEqual([1,2,3,4,5,6]);
    });

    it('inorder - iterative', () => {
        const traversal: number[] = inorderItertive(root!);

        expect(traversal).toEqual([1,2,3,4,5,6]);
    });

    it('inorder - Morris', () => {
        const traversal: number[] = inorderMorris(root!);

        expect(traversal).toEqual([1,2,3,4,5,6]);
    });
});