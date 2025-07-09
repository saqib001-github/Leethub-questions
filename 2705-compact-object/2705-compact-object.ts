type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        const compactedArray: JSONValue[] = [];
        for (const item of obj) {
            if (Boolean(item)) {
                const compactItem = compactObject(item as Obj);
                compactedArray.push(compactItem);
            }
        }
        return compactedArray;
    } else if (typeof obj === 'object' && obj !== null) {
        const compactedObject: { [key: string]: JSONValue } = {};
        for (const [key, value] of Object.entries(obj)) {
            if (Boolean(value)) {
                compactedObject[key] = compactObject(value as Obj);
            }
        }
        return compactedObject;
    } else {
        return obj;
    }
}