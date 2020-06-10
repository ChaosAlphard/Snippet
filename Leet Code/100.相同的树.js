/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p.length !== q.length) {
    return false;
  } else {
    for(let i = 0, len = p.length; i < len; i++) {
      if(p[i] !== q[i]) {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end