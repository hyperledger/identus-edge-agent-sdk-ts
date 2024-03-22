import { PresentationSubmission } from "../../domain";





export class DescriptorPath {

    constructor(private obj: PresentationSubmission) { }
    private camelCaseToSlash(input: string): string {
        // Use regular expression to match camelCase pattern
        const regex = /([a-z])([A-Z])/g;

        // Replace camelCase with slash-separated and convert to lowercase
        return input.replace(regex, '$1_$2').toLowerCase();
    }
    getValue(path: string): any {
        const segments = path.split(/\.|\[|\]/).filter(segment => segment !== '').slice(1, -1).map((segment) => this.camelCaseToSlash(segment))
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