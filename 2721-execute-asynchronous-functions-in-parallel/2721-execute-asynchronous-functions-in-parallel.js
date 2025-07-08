/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        let total = functions.length;

        // If no functions are provided, resolve immediately with an empty array
        if (total === 0) {
            return resolve([]);
        }

        functions.forEach((fn, index) => {
            // Ensure we handle the promise correctly, even if the fn is not a promise
            Promise.resolve(fn()).then((result) => {
                results[index] = result;  // Store the result at the correct index
                completed++;

                // If all promises have resolved, return the results
                if (completed === total) {
                    resolve(results);
                }
            }).catch((error) => {
                // If any promise fails, reject immediately
                reject(error);
            });
        });
    });
};

/**
 * Example usage:
 * const promise = promiseAll([() => new Promise(res => res(42))]);
 * promise.then(console.log); // [42]
 */
