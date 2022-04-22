import {Node} from '../bst/node';
import {inorder} from '../bst/inorder';
import {inorderItertive} from '../bst/inorder_iterative';
import {inorderMorris} from '../bst/inorder_morris';
import {preorder} from '../bst/preorder';
import {preorderIterative} from '../bst/preorder_iterative';
import {postorder} from '../bst/postorder';
import {postorderIterative, postOrderIterativeOneStack} from '../bst/postorder_iterative';

/**
 *       9
 *     /   \
 *    2     10
 *   /  \
 *  1    3
 *        \
 *         7
 *        / \
 *       6   8
 *      /
 *     4
 *      \
 *       5
 * */
describe('BST', () => {
    let root: Node<number>|null = null;
    beforeEach(() => {       
        let node1 = new Node(1);
        let node10 = new Node(10);
        let node8 = new Node(8);
        let node5 = new Node(5);
        let node4 = new Node(4, undefined, node5);
        let node6 = new Node(6, node4);
        let node7 = new Node(7, node6, node8);
        let node3 = new Node(3, undefined, node7);
        let node2 = new Node(2, node1, node3);
        
        root = new Node(9, node2, node10);
    });

    it('inorder - recursive', () => {
        const traversal: number[] = inorder(root!);

        expect(traversal).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('inorder - iterative', () => {
        const traversal: number[] = inorderItertive(root!);

        expect(traversal).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('inorder - Morris', () => {
        const traversal: number[] = inorderMorris(root!);

        expect(traversal).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('preorder - recursive', () => {
        const traversal: number[] = preorder(root!);

        expect(traversal).toEqual([9,2,1,3,7,6,4,5,8,10]);
    });

    it('preorder - iterative', () => {
        const traversal: number[] = preorderIterative(root!);

        expect(traversal).toEqual([9,2,1,3,7,6,4,5,8,10]);
    });

    it('postorder - recursive', () => {
        const traversal: number[] = postorder(root!);

        expect(traversal).toEqual([1,5,4,6,8,7,3,2,10,9]);
    });

    it('postorder - iterative', () => {
        const traversal: number[] = postorderIterative(root!);

        expect(traversal).toEqual([1,5,4,6,8,7,3,2,10,9]);
    });

    it('postorder - iterative with one stack', () => {
        const traversal: number[] = postOrderIterativeOneStack(root!);

        expect(traversal).toEqual([1,5,4,6,8,7,3,2,10,9]);
    });
});