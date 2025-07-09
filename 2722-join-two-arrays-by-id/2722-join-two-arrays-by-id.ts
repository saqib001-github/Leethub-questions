type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const map = new Map<number, ArrayType>();

    // Add all entries from arr1
    for (const obj of arr1) {
        map.set(obj.id, { ...obj });
    }

    // Merge or add entries from arr2
    for (const obj of arr2) {
        const existing = map.get(obj.id);
        if (existing) {
            map.set(obj.id, { ...existing, ...obj });  // arr2 takes precedence
        } else {
            map.set(obj.id, { ...obj });
        }
    }

    return Array.from(map.values());
}
