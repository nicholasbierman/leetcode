/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var getHeight = function (root) {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};
var isBalanced = function (root) {
  if (!root) return true;
  let heightDifference =
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
};
