import { Socket } from '../Sockets/Socket.js';
export declare const readInputFromSockets: <T>(inputs: Socket[], inputName: string, nodeTypeName: string) => T;
export declare const writeOutputsToSocket: <T>(outputs: Socket[], outputName: string, value: T, nodeTypeName: string) => void;
