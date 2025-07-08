/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let results = [];
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        temp.push(arr[i]);

        if(temp.length === size){
            results.push(temp);
            temp = [];
        }
    }
    if(temp.length > 0) results.push(temp);
    return results;
};
