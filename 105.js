/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// determine the root, can get from preorder because it starts with the root
// find node left of root, can get from inorder (left, self, right)
// everything to the right of a node in inorder array will be to the right in some order
// preorder and inorder will have the same elements, just in a different order
//
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null; // base case
  let rootVal = preorder[0]; // 3
  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal); // 1
  let leftInOrder = inorder.slice(0, midIdx); // [9]
  let rightInOrder = inorder.slice(midIdx + 1); // [15, 20, 7]

  let leftPreOrder = preorder.filter((val) => leftInOrder.includes(val)); // [9]
  let rightPreOrder = preorder.filter((val) => rightInOrder.includes(val)); // [15, 20, 7]

  let leftTree = buildTree(leftPreOrder, leftInOrder);
  let rightTree = buildTree(rightPreOrder, rightInOrder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
};
