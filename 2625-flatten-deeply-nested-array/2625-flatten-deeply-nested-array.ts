type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (array: MultiDimensionalArray, level: number): MultiDimensionalArray {
    if (level == 0) return array;
    let result: MultiDimensionalArray = [];
    for (let item of array) {
        if (Array.isArray(item) && level > 0) {
            // Recursively flatten sub-arrays
            result.push(...flat(item, level - 1));
        } else {
            result.push(item);
        }
    }
    return result;
};