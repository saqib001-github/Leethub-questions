/** 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let a=[];
    arr.forEach((val,i)=>{
        a.push(fn(val,i));
    })
    return a;
};