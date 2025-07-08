var TimeLimitedCache = function() {
    this.cache = new Map();

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expiry = now + duration;
    let existed = false;

    if(this.cache.has(key)){
        const cachedItem = this.cache.get(key);
        if(cachedItem.expiry > now){
            existed = true;
        }
    }
    this.cache.set(key, { value, expiry});
    return existed;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if(this.cache.has(key)){
        const { value, expiry } = this.cache.get(key);
        if(expiry <= now){
            this.cache.delete(key);
            return -1;
        }
        return value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for(let [key,item] of this.cache){
        if(item.expiry > now) count++;
        else this.cache.delete(key);
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */