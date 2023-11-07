export class Link {
    constructor(nodeId?: string, socketName?: string);
    nodeId: string;
    socketName: string;
    _targetNode: any;
    _targetSocket: any;
}
