import { Socket } from "../Sockets/Socket.js";
import { Node } from "./Node.js";
export declare class Link {
    nodeId: string;
    socketName: string;
    _targetNode: Node | undefined;
    _targetSocket: Socket | undefined;
    constructor(nodeId?: string, socketName?: string);
}
