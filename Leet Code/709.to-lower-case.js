/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (72.90%)
 * Total Accepted:    14.3K
 * Total Submissions: 19.7K
 * Testcase Example:  '"Hello"'
 *
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: "Hello"
 * 输出: "hello"
 * 
 * 示例 2：
 * 
 * 
 * 输入: "here"
 * 输出: "here"
 * 
 * 示例 3：
 * 
 * 
 * 输入: "LOVELY"
 * 输出: "lovely"
 * 
 * 
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const arr = str.split('')
    const result = []
    for(const v of arr) {
        const char = v.charCodeAt()
        if(char>=65 && char <=90) {
            result.push(String.fromCharCode(char + 32))
        } else {
            result.push(String.fromCharCode(char))
        }
    }

    return result.join('')
};

// Done.
