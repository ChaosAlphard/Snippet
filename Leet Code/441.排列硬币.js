/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n<=0) {return 0}
    if(n<3) {return 1}
    if(n<6) {return 2}

    let i=1;
    let tmp = n;
    let flag = true
    while(flag) {
        tmp = tmp - i
        if(tmp < i+1) {
            flag = false
            return i
        }
        i++
    }
};

// Done.
