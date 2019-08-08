/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (78.70%)
 * Total Accepted:    26.8K
 * Total Submissions: 34K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 
 * 注意:
 * 
 * 
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 * 
 * 
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
    if(S.length>50 || J.length>50) {
        throw new Error('length is too long! max length is 50')
    }

    if(checkRepet(J)) {
        throw new Error('jewels can not repet!')
    }

    let count = 0
    for(let item of S) {
        if(J.indexOf(item) !== -1) {
            count++
        }
    }

    return count
};

function checkRepet(str) {
    // const arr = str.split('')
    // for(const [i,v] of arr.entries()) {
    //     if(str.indexOf(v,i+1) != -1){
    //         return true
    //     }
    // }
    // return false
    const arr = str.split('')
    return arr.length !== [...new Set(arr)].length
}

// Done.
