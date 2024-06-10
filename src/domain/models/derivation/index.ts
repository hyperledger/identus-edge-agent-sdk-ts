import { DerivationAxis } from "./DerivationAxis";

export class AxesArray extends Array<DerivationAxis> {
    override toString(): string {
        return `m/${this.map((axis) => axis.toString()).join("/")}`
    }
}


export interface BaseSchema {
    [name: string]: number
}


export abstract class DerivationPathBase<T extends BaseSchema> {
    constructor(protected variables: T) { }
    abstract toString(): string;
    abstract axes: AxesArray;
    abstract schema: string;
    abstract index: number;
}


export type DerivationSchema = DerivationPathBase<BaseSchema>

export type DerivationClass<
    T extends BaseSchema = BaseSchema
> = new (variables: number[]) => DerivationPathBase<T>;

