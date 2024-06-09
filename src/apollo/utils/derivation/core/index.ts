import { DerivationAxis } from "../DerivationAxis";

export interface BaseSchema {
    [name: string]: number
}


export class AxesArray extends Array<DerivationAxis> {
    override toString(): string {
        return `m/${this.map((axis) => axis.toString()).join("/")}`
    }
}

export abstract class DerivationPathBase<T extends BaseSchema> {
    constructor(protected variables: T) { }
    abstract toString(): string;
    abstract axes: AxesArray;
    abstract schema: string;
}
