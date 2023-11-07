export class Assert {
    static mustEqual(value: any, mustEqualThisValue: any, msg?: string): void;
    static mustBeTrue(condition: any, msg?: string): void;
    static mustBeDefined(variable: any, msg?: string): void;
}
