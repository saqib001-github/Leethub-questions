/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc,item)=>{
        const key = fn(item);
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */