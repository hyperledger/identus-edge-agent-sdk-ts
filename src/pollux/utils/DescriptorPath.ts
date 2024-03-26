import { PresentationSubmission } from "../../domain";





export class DescriptorPath {

    constructor(private obj: PresentationSubmission) { }

    getValue(path: string): any {
        const segments = path.split(/\.|\[|\]/).filter(segment => segment !== '').slice(1, -1)
        let currentObj: any = this.obj;
        for (const segment of segments) {
            if (Array.isArray(currentObj)) {
                const index = parseInt(segment);
                if (isNaN(index) || index >= currentObj.length) {
                    throw new Error(`Array index ${segment} out of bounds.`);
                }
                currentObj = currentObj[index];
            } else if (currentObj && typeof currentObj === 'object' && currentObj.hasOwnProperty(segment)) {
                currentObj = currentObj[segment];
            } else {
                throw new Error(`Property '${segment}' does not exist.`);
            }
        }
        return currentObj;

    }
}