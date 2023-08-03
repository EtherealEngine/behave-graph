import { Socket } from '../Sockets/Socket.js';
import { INode } from './NodeInstance.js';
export declare class Link {
    nodeId: string;
    socketName: string;
    _targetNode: INode | undefined;
    _targetSocket: Socket | undefined;
    constructor(nodeId?: string, socketName?: string);
}
