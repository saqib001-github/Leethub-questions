/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(obj === undefined || obj === null) return true;
    if(typeof obj === 'object') return Object.keys(obj).length === 0;
    return false;
};