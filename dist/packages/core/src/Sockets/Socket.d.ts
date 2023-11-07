import { Link } from '../Nodes/Link.js';
export type Choices = string[] | {
    text: string;
    value: any;
}[];
export declare class Socket {
    readonly valueTypeName: string;
    readonly name: string;
    value: any | undefined;
    readonly label: string | undefined;
    readonly valueChoices?: Choices | undefined;
    readonly links: Link[];
    constructor(valueTypeName: string, name: string, value?: any | undefined, label?: string | undefined, valueChoices?: Choices | undefined);
}
