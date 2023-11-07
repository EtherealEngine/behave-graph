export const __esModule: boolean;
export class Assert {
    static mustBeTrue(condition: any, msg?: string): void;
    static mustBeDefined(variable: any, msg?: string): void;
}
export class AsyncNode extends Node {
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
    dispose(): void;
}
export class AsyncNode2 extends AsyncNode {
    constructor(props: any);
}
export var BooleanNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    And: NodeDescription;
    Or: NodeDescription;
    Not: NodeDescription;
    ToFloat: NodeDescription;
    Equal: NodeDescription;
    toInteger: NodeDescription;
}>;
export const BooleanValue: ValueType;
export class Branch extends FlowNode {
    constructor(description: any, graph: any);
}
export var ColorNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Scale: NodeDescription;
    Mix: NodeDescription;
    HslToColor: NodeDescription;
    ColorToHsl: NodeDescription;
    HexToColor: NodeDescription;
    ColorToHex: NodeDescription;
    Equal: NodeDescription;
}>;
export const ColorValue: ValueType;
export class Counter extends FlowNode {
    constructor(description: any, graph: any);
    count: number | undefined;
}
export class CustomEvent {
    constructor(id: any, name: any, parameters?: any[]);
    id: any;
    name: any;
    parameters: any[];
}
export class Debounce extends AsyncNode {
    constructor(description: any, graph: any);
}
export class DefaultLogger {
    verbose(text: any): void;
    info(text: any): void;
    warn(text: any): void;
    error(text: any): void;
}
export class Delay extends AsyncNode {
    constructor(description: any, graph: any);
    timeoutPending: boolean | undefined;
}
export class DoN extends FlowNode {
    constructor(description: any, graph: any);
    count: number | undefined;
}
export class DoOnce extends FlowNode {
    constructor(description: any, graph: any);
    firedOnce: boolean | undefined;
}
export class DummyScene {
    getProperty(jsonPath: any, valueTypeName: any): any;
    setProperty(): void;
    addOnClickedListener(jsonPath: any, callback: any): void;
}
export class Engine {
    constructor(graph: any);
    graph: any;
    dispose(): void;
    commitToNewFiber(node: any, outputFlowSocketName: any, fiberCompletedListener?: undefined): void;
    executeAllSync(limitInSeconds?: number, limitInSteps?: number): number;
    executeAllAsync(limitInSeconds?: number, limitInSteps?: number): Promise<number>;
}
export var EulerNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Scale: NodeDescription;
    Mix: NodeDescription;
    Mat3ToEuler: NodeDescription;
    Mat4ToEuler: NodeDescription;
    QuatToEuler: NodeDescription;
    Equal: NodeDescription;
}>;
export const EulerValue: ValueType;
export class EventEmitter {
    addListener(listener: any): void;
    removeListener(listener: any): void;
    clear(): void;
    emit(event: any): void;
    get listenerCount(): any;
}
export class EventNode extends Node {
    init(engine: any): void;
    dispose(engine: any): void;
}
export class EventNode2 extends EventNode {
    constructor(props: any);
}
export class ExpectTrue extends FlowNode {
    constructor(description: any, graph: any);
}
export class Fiber {
    constructor(engine: any, nextEval: any, fiberCompletedListener?: undefined);
    engine: any;
    nextEval: any;
    graph: any;
    commit(node: any, outputSocketName: any, fiberCompletedListener?: undefined): void;
    executeStep(): void;
    isCompleted(): boolean;
}
export class FlipFlop extends FlowNode {
    constructor(description: any, graph: any);
    isOn: any;
}
export var FloatNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Multiply: NodeDescription;
    Divide: NodeDescription;
    Modulus: NodeDescription;
    Power: NodeDescription;
    SquareRoot: NodeDescription;
    E: NodeDescription;
    Exp: NodeDescription;
    Ln: NodeDescription;
    Log2: NodeDescription;
    Log10: NodeDescription;
    PI: NodeDescription;
    Sin: NodeDescription;
    Asin: NodeDescription;
    Cos: NodeDescription;
    Acos: NodeDescription;
    Tan: NodeDescription;
    RadiansToDegrees: NodeDescription;
    DegreesToRadians: NodeDescription;
    Atan: NodeDescription;
    Mix: NodeDescription;
    ToFloat: NodeDescription;
    Min: NodeDescription;
    Max: NodeDescription;
    Clamp: NodeDescription;
    Abs: NodeDescription;
    Sign: NodeDescription;
    Floor: NodeDescription;
    Ceil: NodeDescription;
    Round: NodeDescription;
    Trunc: NodeDescription;
    Random: NodeDescription;
    Equal: NodeDescription;
    EqualTolerance: NodeDescription;
    GreaterThan: NodeDescription;
    GreaterThanOrEqual: NodeDescription;
    LessThan: NodeDescription;
    LessThanOrEqual: NodeDescription;
    IsNaN: NodeDescription;
    IsInf: NodeDescription;
}>;
export const FloatValue: ValueType;
export class FlowNode extends Node {
    triggered(fiber: any, triggeringSocketName: any): void;
}
export class FlowNode2 extends FlowNode {
    constructor(props: any);
}
export class ForLoop extends FlowNode {
    constructor(description: any, graph: any);
}
export class Gate extends FlowNode {
    constructor(description: any, graph: any);
    isClosed: any;
    isInitialized: boolean | undefined;
}
export class GetSceneProperty extends ImmediateNode {
    static GetDescriptions(scene: any, ...valueTypeNames: any[]): NodeDescription[];
    constructor(description: any, graph: any, valueTypeName: any, scene: any);
    valueTypeName: any;
    scene: any;
}
export class Graph {
    constructor(registry: any);
    registry: any;
    createNode(nodeTypeName: any, nodeId?: string, nodeConfiguration?: {}): any;
}
export class ImmediateNode extends Node {
    constructor(description: any, graph: any, inputs: any[] | undefined, outputs: any[] | undefined, exec: any, configuration?: {});
    exec: any;
}
export class ImmediateNode2 extends ImmediateNode {
    constructor(props: any);
}
export class In0Out1FuncNode extends ImmediateNode {
    constructor(description: any, graph: any, outputValueType: any, evalFunc: any);
    evalFunc: any;
}
export class In1Out1FuncNode extends ImmediateNode {
    constructor(description: any, graph: any, inputValueTypes: any, outputValueType: any, evalFunc: any, inputNames?: string[]);
    evalFunc: any;
    inputNames: string[];
}
export class In2Out1FuncNode extends ImmediateNode {
    constructor(description: any, graph: any, inputValueTypes: any, outputValueType: any, evalFunc: any, inputNames?: string[]);
    evalFunc: any;
    inputNames: string[];
}
export class In3Out1FuncNode extends ImmediateNode {
    constructor(description: any, graph: any, inputValueTypes: any, outputValueType: any, evalFunc: any, inputNames?: string[]);
    evalFunc: any;
    inputNames: string[];
}
export class In4Out1FuncNode extends ImmediateNode {
    constructor(description: any, graph: any, inputValueTypes: any, outputValueType: any, evalFunc: any, inputNames?: string[]);
    evalFunc: any;
    inputNames: string[];
}
export var IntegerNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Multiply: NodeDescription;
    Divide: NodeDescription;
    Modulus: NodeDescription;
    ToFloat: NodeDescription;
    Min: NodeDescription;
    Max: NodeDescription;
    Clamp: NodeDescription;
    Abs: NodeDescription;
    Sign: NodeDescription;
    Equal: NodeDescription;
    GreaterThan: NodeDescription;
    GreaterThanOrEqual: NodeDescription;
    LessThan: NodeDescription;
    LessThanOrEqual: NodeDescription;
    toBoolean: NodeDescription;
}>;
export const IntegerValue: ValueType;
export class LifecycleOnEnd extends EventNode {
    constructor(description: any, graph: any, lifecycleEventEmitter: any);
    lifecycleEventEmitter: any;
    onEndEvent: (() => void) | undefined;
}
export class LifecycleOnStart extends EventNode {
    constructor(description: any, graph: any, lifecycleEventEmitter: any);
    lifecycleEventEmitter: any;
    onStartEvent: (() => void) | undefined;
}
export class LifecycleOnTick extends EventNode {
    constructor(description: any, graph: any, lifecycleEventEmitter: any);
    lifecycleEventEmitter: any;
    onTickEvent: (() => void) | undefined;
}
export class Link {
    constructor(nodeId?: string, socketName?: string);
    nodeId: string;
    socketName: string;
}
export class Log extends FlowNode {
    constructor(description: any, graph: any, logger: any);
    logger: any;
}
export class Logger {
    static verbose(text: any): void;
    static info(text: any): void;
    static warn(text: any): void;
    static error(text: any): void;
}
export class ManualLifecycleEventEmitter {
}
export class MultiGate extends FlowNode {
    constructor(description: any, graph: any);
    nextIndex: any;
}
export class Node {
    constructor(description: any, graph: any, inputs?: any[], outputs?: any[], configuration?: {});
    description: any;
    graph: any;
    inputs: any[];
    outputs: any[];
    configuration: {};
    readInput(inputName: any): any;
    writeOutput(outputName: any, value: any): void;
}
export class NodeDescription {
    constructor(typeName: any, category: any, label: string | undefined, factory: any, otherTypeNames?: any[], helpDescription?: string, configuration?: {});
    typeName: any;
    category: any;
    label: string;
    factory: any;
    otherTypeNames: any[];
    helpDescription: string;
    configuration: {};
}
export class NodeDescription2 extends NodeDescription {
    constructor(properties: any);
    properties: any;
}
export class NodeTypeRegistry {
    clear(): void;
    register(...descriptions: any[]): void;
    contains(typeName: any): boolean;
    get(typeName: any): any;
    getAllNames(): string[];
    getAllDescriptions(): any[];
}
export class OnCustomEvent extends EventNode2 {
    constructor(description: any, graph: any, configuration: any);
    customEvent: any;
    onCustomEvent: ((parameters: any) => void) | undefined;
}
export class OnSceneNodeClick extends EventNode {
    constructor(description: any, graph: any);
}
export var QuatNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Negate: NodeDescription;
    Multiply: NodeDescription;
    Scale: NodeDescription;
    Length: NodeDescription;
    Normalize: NodeDescription;
    Dot: NodeDescription;
    Ln: NodeDescription;
    Exp: NodeDescription;
    Pow: NodeDescription;
    Mat3ToQuat: NodeDescription;
    Mat4ToQuat: NodeDescription;
    EulerToQuat: NodeDescription;
    AngleAxisToQuat: NodeDescription;
    Slerp: NodeDescription;
    Equal: NodeDescription;
}>;
export const QuatValue: ValueType;
export class Registry {
}
export class Sequence extends FlowNode {
    constructor(description: any, graph: any, configuration: any);
}
export class SetSceneProperty extends FlowNode {
    static GetDescriptions(scene: any, ...valueTypeNames: any[]): NodeDescription[];
    constructor(description: any, graph: any, valueTypeName: any, scene: any);
    valueTypeName: any;
    scene: any;
}
export class Socket {
    constructor(valueTypeName: any, name: any, value?: undefined, label?: undefined, valueChoices?: any[]);
    valueTypeName: any;
    name: any;
    value: any;
    label: any;
    valueChoices: any[];
}
export var StringNodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Concat: NodeDescription;
    Includes: NodeDescription;
    Length: NodeDescription;
    Equal: NodeDescription;
}>;
export const StringValue: ValueType;
export class Throttle extends AsyncNode {
    constructor(description: any, graph: any);
    timeoutPending: boolean | undefined;
}
export class TriggerCustomEvent extends FlowNode2 {
    constructor(description: any, graph: any, configuration: any);
    customEvent: any;
}
export class ValueType {
    constructor(name: any, creator: any, deserialize: any, serialize: any, lerp: any);
    name: any;
    creator: any;
    deserialize: any;
    serialize: any;
    lerp: any;
}
export class ValueTypeRegistry {
    register(...valueTypes: any[]): void;
    get(valueTypeName: any): any;
    getAllNames(): string[];
}
export class Variable {
    constructor(id: any, name: any, valueTypeName: any, initialValue: any);
    id: any;
    name: any;
    valueTypeName: any;
    initialValue: any;
    value: any;
    get(): any;
    set(newValue: any): void;
}
export class VariableGet extends ImmediateNode {
    constructor(description: any, graph: any, configuration: any);
}
export class VariableSet extends FlowNode {
    static GetDescription(graph: any, variableId: any): NodeDescription;
    constructor(description: any, graph: any, configuration: any);
    variable: any;
}
export class Vec2 {
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    clone(result?: Vec2): Vec2;
    set(x: any, y: any): Vec2;
}
export var Vec2Nodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Scale: NodeDescription;
    Length: NodeDescription;
    Normalize: NodeDescription;
    Dot: NodeDescription;
    Mix: NodeDescription;
    Equal: NodeDescription;
}>;
export const Vec2Value: ValueType;
export class Vec3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    clone(result?: Vec3): Vec3;
    set(x: any, y: any, z: any): Vec3;
}
export var Vec3Nodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Scale: NodeDescription;
    Length: NodeDescription;
    Normalize: NodeDescription;
    Cross: NodeDescription;
    Dot: NodeDescription;
    Mix: NodeDescription;
    Equal: NodeDescription;
}>;
export const Vec3Value: ValueType;
export class Vec4 {
    constructor(x?: number, y?: number, z?: number, w?: number);
    x: number;
    y: number;
    z: number;
    w: number;
    clone(result?: Vec4): Vec4;
    set(x: any, y: any, z: any, w: any): Vec4;
}
export var Vec4Nodes: Readonly<{
    __proto__: null;
    Constant: NodeDescription;
    Create: NodeDescription;
    Elements: NodeDescription;
    Add: NodeDescription;
    Subtract: NodeDescription;
    Negate: NodeDescription;
    Scale: NodeDescription;
    Length: NodeDescription;
    Normalize: NodeDescription;
    Dot: NodeDescription;
    Mix: NodeDescription;
    Equal: NodeDescription;
}>;
export const Vec4Value: ValueType;
export class VecElements extends ImmediateNode {
    constructor(description: any, graph: any, valueTypeName: any, elementNames: string[] | undefined, toArray: any);
}
export class WaitAll extends FlowNode {
    constructor(description: any, graph: any, numInputs: any);
    numInputs: any;
    reset(): void;
    triggeredCount: number | undefined;
    outputTriggered: boolean | undefined;
}
export function angleAxisToQuat(angle: any, axis: any, result?: Vec4): Vec4;
export function eulerToQuat(euler: any, result?: Vec4): Vec4;
export function getNodeDescriptions(importWildcard: any): any[];
export function hexToRGB(hex: any, result?: Vec3): Vec3;
export function hslToRGB(hsl: any, result?: Vec3): Vec3;
export function mat3ToEuler(m: any, result?: Vec3): Vec3;
export function mat3ToQuat(m: any, result?: Vec4): Vec4;
export function mat4ToEuler(m: any, result?: Vec3): Vec3;
export function mat4ToQuat(m: any, result?: Vec4): Vec4;
export function parseSafeFloat(text: any, fallback?: number): number;
export function parseSafeFloats(text: any, fallback?: number): any;
export function quatConjugate(a: any, result?: Vec4): Vec4;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
export function quatExp(a: ReadonlyQuat, result?: Vec4): quat;
export function quatLn(a: any, result?: Vec4): Vec4;
export function quatMultiply(a: any, b: any, result?: Vec4): Vec4;
export function quatPow(a: any, b: any, result?: Vec4): Vec4;
export function quatSlerp(a: any, b: any, t: any, result?: Vec4): any;
export function quatToAngleAxis(q: any, result?: Vec3): (number | Vec3)[];
export function quatToEuler(q: any, result?: Vec3): Vec3;
export function readGraphFromJSON(graphJson: any, registry: any): Graph;
export function registerCoreProfile(registry: any, logger?: DefaultLogger, lifecycleEventEmitter?: ManualLifecycleEventEmitter): any;
export function registerSceneProfile(registry: any, scene?: DummyScene): any;
export function rgbToHSL(rgb: any, result?: Vec3): Vec3;
export function rgbToHex(rgb: any): number;
export function toSafeString(elements: any): string;
export function validateGraph(graph: any): any[];
export function validateGraphAcyclic(graph: any): any[];
export function validateGraphLinks(graph: any): any[];
export function validateNodeRegistry(registry: any): any[];
export function validateRegistry(registry: any): any[];
export function validateValueRegistry(graphRegistry: any): any[];
export function vec2Add(a: any, b: any, result?: Vec2): Vec2;
export function vec2Dot(a: any, b: any): number;
export function vec2Equals(a: any, b: any, tolerance?: number): boolean;
export function vec2FromArray(array: any, offset?: number, result?: Vec2): Vec2;
export function vec2Length(a: any): number;
export function vec2Mix(a: any, b: any, t: any, result?: Vec2): Vec2;
export function vec2MultiplyByScalar(a: any, b: any, result?: Vec2): Vec2;
export function vec2Negate(a: any, result?: Vec2): Vec2;
export function vec2Normalize(a: any, result?: Vec2): Vec2;
export function vec2Parse(text: any, result?: Vec2): Vec2;
export function vec2Subtract(a: any, b: any, result?: Vec2): Vec2;
export function vec2ToArray(a: any, array: any, offset?: number): void;
export function vec2ToString(a: any): string;
export function vec3Add(a: any, b: any, result?: Vec3): Vec3;
export function vec3Cross(a: any, b: any, result?: Vec3): Vec3;
export function vec3Dot(a: any, b: any): number;
export function vec3Equals(a: any, b: any, tolerance?: number): boolean;
export function vec3FromArray(array: any, offset?: number, result?: Vec3): Vec3;
export function vec3Length(a: any): number;
export function vec3Mix(a: any, b: any, t: any, result?: Vec3): Vec3;
export function vec3MultiplyByScalar(a: any, b: any, result?: Vec3): Vec3;
export function vec3Negate(a: any, result?: Vec3): Vec3;
export function vec3Normalize(a: any, result?: Vec3): Vec3;
export function vec3Parse(text: any, result?: Vec3): Vec3;
export function vec3Subtract(a: any, b: any, result?: Vec3): Vec3;
export function vec3ToArray(a: any, array: any, offset?: number): void;
export function vec3ToString(a: any): string;
export function vec4Add(a: any, b: any, result?: Vec4): Vec4;
export function vec4Dot(a: any, b: any): number;
export function vec4Equals(a: any, b: any, tolerance?: number): boolean;
export function vec4FromArray(array: any, offset?: number, result?: Vec4): Vec4;
export function vec4Length(a: any): number;
export function vec4Mix(a: any, b: any, t: any, result?: Vec4): Vec4;
export function vec4MultiplyByScalar(a: any, b: any, result?: Vec4): Vec4;
export function vec4Negate(a: any, result?: Vec4): Vec4;
export function vec4Normalize(a: any, result?: Vec4): Vec4;
export function vec4Parse(text: any, result?: Vec4): Vec4;
export function vec4Subtract(a: any, b: any, result?: Vec4): Vec4;
export function vec4ToArray(a: any, array: any, offset?: number): void;
export function vec4ToString(a: any): string;
export function writeGraphToJSON(graph: any): {
    metadata: any;
};
export function writeNodeSpecsToJSON(registry: any): any[];
