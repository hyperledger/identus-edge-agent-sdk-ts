
export class DescriptorPath {

    constructor(private obj: any) { }

    getValue(path: string): null | any {
        const segments = path.split(/\.|\[|\]/).filter(segment => segment !== '').slice(1)
        let currentObj: any = this.obj;
        for (const segment of segments) {
            if (Array.isArray(currentObj)) {
                const index = parseInt(segment);
                if (isNaN(index) || index >= currentObj.length) {
                    return null
                }
                if (!currentObj[index]) {
                    return null;
                }

                currentObj = currentObj[index];
            } else if (currentObj && typeof currentObj === 'object' && currentObj[segment] !== undefined) {
                currentObj = currentObj[segment];
            } else {
                return null
            }
        }
        return currentObj;

    }
}