/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memory = new Map();
    return function(...args) {
        const keys = JSON.stringify(args);
        if(memory.has(keys)) return memory.get(keys);
        let result = fn(...args);
        memory.set(keys,result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */