'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class EventEmitter {
  constructor() {
    _defineProperty(this, "listeners", []);
  }
  addListener(listener) {
    this.listeners.push(listener);
  }
  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }
  clear() {
    this.listeners.splice(0, this.listeners.length);
  }
  emit(event) {
    if (this.listeners.length === 0) return;
    // copy array before emitting event to ensure even if listener array is modified, everyone listening initially gets the event.
    // inspired by mrdoob's EventDispatcher
    this.listeners.slice(0).forEach(listener => {
      listener(event);
    });
  }
  get listenerCount() {
    return this.listeners.length;
  }
}

var _class$o;
class Logger {
  static verbose(text) {
    this.onVerbose.emit(text);
  }
  static info(text) {
    this.onInfo.emit(text);
  }
  static warn(text) {
    this.onWarn.emit(text);
  }
  static error(text) {
    this.onError.emit(text);
  }
}
_class$o = Logger;
_defineProperty(Logger, "onVerbose", new EventEmitter());
_defineProperty(Logger, "onInfo", new EventEmitter());
_defineProperty(Logger, "onWarn", new EventEmitter());
_defineProperty(Logger, "onError", new EventEmitter());
(() => {
  const prefix = () => {
    return new Date().toLocaleTimeString().padStart(11, '0');
  };
  _class$o.onVerbose.addListener(text => {
    console.log(prefix() + ` VERB:  ${text}`);
  });
  _class$o.onInfo.addListener(text => {
    console.log(prefix() + ` INFO:  ${text}`);
  });
  _class$o.onWarn.addListener(text => {
    console.warn(prefix() + ` WARN:  ${text}`);
  });
  _class$o.onError.addListener(text => {
    console.error(prefix() + ` ERR:  ${text}`);
  });
})();

class Assert {
  static mustBeTrue(condition, msg = '') {
    if (!condition) {
      throw new Error(`failed assertion: ${msg}`);
    }
  }
  static mustBeDefined(variable, msg = '') {
    if (variable === undefined) {
      throw new Error(`failed assertion: variable must be defined ${msg}`);
    }
  }
}

/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
const lut = [];
for (let i = 0; i < 256; i++) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
function generateUuid() {
  const d0 = Math.random() * 0xffffffff | 0;
  const d1 = Math.random() * 0xffffffff | 0;
  const d2 = Math.random() * 0xffffffff | 0;
  const d3 = Math.random() * 0xffffffff | 0;
  const uuid = `${lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff]}-${lut[d1 & 0xff]}${lut[d1 >> 8 & 0xff]}-${lut[d1 >> 16 & 0x0f | 0x40]}${lut[d1 >> 24 & 0xff]}-${lut[d2 & 0x3f | 0x80]}${lut[d2 >> 8 & 0xff]}-${lut[d2 >> 16 & 0xff]}${lut[d2 >> 24 & 0xff]}${lut[d3 & 0xff]}${lut[d3 >> 8 & 0xff]}${lut[d3 >> 16 & 0xff]}${lut[d3 >> 24 & 0xff]}`;

  // .toUpperCase() here flattens concatenated strings to save heap memory space.
  return uuid.toUpperCase();
}

// Purpose:
//  - stores the node graph
class Graph {
  constructor(registry) {
    _defineProperty(this, "name", '');
    // TODO: think about whether I can replace this with an immutable strategy?  Rather than having this mutable?
    _defineProperty(this, "nodes", {});
    // TODO: think about whether I can replace this with an immutable strategy?  Rather than having this mutable?
    _defineProperty(this, "variables", {});
    // TODO: think about whether I can replace this with an immutable strategy?  Rather than having this mutable?
    _defineProperty(this, "customEvents", {});
    _defineProperty(this, "metadata", {});
    _defineProperty(this, "version", 0);
    this.registry = registry;
  }
  createNode(nodeTypeName, nodeId = generateUuid(), nodeConfiguration = {}) {
    if (nodeId in this.nodes) {
      throw new Error(`can not create new node of type ${nodeTypeName} with id ${nodeId} as one with that id already exists.`);
    }
    let nodeDescription = undefined;
    if (this.registry.nodes.contains(nodeTypeName)) {
      nodeDescription = this.registry.nodes.get(nodeTypeName);
    }
    if (nodeDescription === undefined) {
      throw new Error(`no registered node descriptions with the typeName ${nodeTypeName}`);
    }
    const node = nodeDescription.factory(nodeDescription, this, nodeConfiguration);
    node.id = nodeId;
    this.nodes[nodeId] = node;
    node.inputs.forEach(socket => {
      if (socket.valueTypeName !== 'flow' && socket.value === undefined) {
        socket.value = this.registry.values.get(socket.valueTypeName).creator();
      }
    });
    return node;
  }
}

class Node {
  constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
    _defineProperty(this, "id", '');
    _defineProperty(this, "label", '');
    _defineProperty(this, "metadata", {});
    this.description = description;
    this.graph = graph;
    this.inputs = inputs;
    this.outputs = outputs;
    this.configuration = configuration;
  }

  // TODO: this may want to cache the values on the creation of the NodeEvalContext
  // for re-entrant async operations, otherwise the inputs may change during operation.
  readInput(inputName) {
    const inputSocket = this.inputs.find(socket => socket.name === inputName);
    if (inputSocket === undefined) {
      throw new Error(`can not find input socket with name ${inputName} on node of type ${this.description.typeName}`);
    }
    return inputSocket.value;
  }
  writeOutput(outputName, value) {
    const outputSocket = this.outputs.find(socket => socket.name === outputName);
    if (outputSocket === undefined) {
      throw new Error(`can not find output socket with name ${outputSocket} on node of type ${this.description.typeName}`);
    }
    if (outputSocket.valueTypeName === 'flow') {
      throw new Error(`can not set the value of Flow output socket ${outputName}, use commit() instead`);
    }
    outputSocket.value = value;
  }
}

// async flow node with only a single flow input
class AsyncNode extends Node {
  constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
    super(description, graph, inputs, outputs, configuration);
    // must have at least one input flow socket
    Assert.mustBeTrue(this.inputs.some(socket => socket.valueTypeName === 'flow'));

    // must have at least one output flow socket
    Assert.mustBeTrue(this.outputs.some(socket => socket.valueTypeName === 'flow'));
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  triggered(engine, triggeringSocketName, finished) {
    throw new Error('not implemented');
  }
  dispose() {
    throw new Error('not implemented');
  }
}
class AsyncNode2 extends AsyncNode {
  constructor(props) {
    super(props.description, props.graph, props.inputs, props.outputs);
  }
}

// no flow inputs, always evaluated on startup
class EventNode extends Node {
  constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
    super(description, graph, inputs, outputs, configuration);
    // no input flow sockets allowed.
    Assert.mustBeTrue(!this.inputs.some(socket => socket.valueTypeName === 'flow'));

    // must have at least one output flow socket
    Assert.mustBeTrue(this.outputs.some(socket => socket.valueTypeName === 'flow'));
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  init(engine) {
    throw new Error('not implemented');
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  dispose(engine) {
    throw new Error('not implemented');
  }
}
class EventNode2 extends EventNode {
  constructor(props) {
    super(props.description, props.graph, props.inputs, props.outputs, props.configuration);
  }
}

class FlowNode extends Node {
  constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
    // determine if this is an eval node
    super(description, graph, inputs, outputs, configuration);

    // must have at least one input flow socket
    Assert.mustBeTrue(this.inputs.some(socket => socket.valueTypeName === 'flow'));
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  triggered(fiber, triggeringSocketName) {
    throw new Error('not implemented');
  }
}
class FlowNode2 extends FlowNode {
  constructor(props) {
    super(props.description, props.graph, props.inputs, props.outputs, props.configuration);
  }
}

class ImmediateNode extends Node {
  constructor(description, graph, inputs = [], outputs = [], exec, configuration = {}) {
    super(description, graph, inputs, outputs, configuration);

    // must have no input flow sockets
    this.exec = exec;
    Assert.mustBeTrue(!this.inputs.some(socket => socket.valueTypeName === 'flow'));

    // must have no output flow sockets
    Assert.mustBeTrue(!this.outputs.some(socket => socket.valueTypeName === 'flow'));
  }
}
class ImmediateNode2 extends ImmediateNode {
  constructor(props) {
    super(props.description, props.graph, props.inputs, props.outputs, props.exec);
  }
}

class Link {
  constructor(nodeId = '', socketName = '') {
    _defineProperty(this, "_targetNode", undefined);
    _defineProperty(this, "_targetSocket", undefined);
    this.nodeId = nodeId;
    this.socketName = socketName;
  }
}

class ValueType {
  constructor(name, creator, deserialize, serialize, lerp) {
    this.name = name;
    this.creator = creator;
    this.deserialize = deserialize;
    this.serialize = serialize;
    this.lerp = lerp;
  }
}

class Socket {
  constructor(valueTypeName, name, value = undefined, label = undefined, valueChoices = [] // if not empty, value must be one of these.
  ) {
    _defineProperty(this, "links", []);
    this.valueTypeName = valueTypeName;
    this.name = name;
    this.value = value;
    this.label = label;
    this.valueChoices = valueChoices;
  }
}

class CustomEvent {
  constructor(id, name, parameters = []) {
    _defineProperty(this, "label", '');
    _defineProperty(this, "metadata", {});
    _defineProperty(this, "eventEmitter", new EventEmitter());
    this.id = id;
    this.name = name;
    this.parameters = parameters;
  }
}

class Variable {
  constructor(id, name, valueTypeName, initialValue // this is assumed to be properly deseriealized from a string.
  ) {
    _defineProperty(this, "label", '');
    _defineProperty(this, "metadata", {});
    _defineProperty(this, "version", 0);
    // this is updated on each change to the variable state.
    _defineProperty(this, "onChanged", new EventEmitter());
    this.id = id;
    this.name = name;
    this.valueTypeName = valueTypeName;
    this.initialValue = initialValue;
    this.value = this.initialValue;
  }
  get() {
    return this.value;
  }
  set(newValue) {
    if (newValue !== this.value) {
      this.value = newValue;
      this.version++;
      this.onChanged.emit(this);
    }
  }
}

const inputSocketName = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
};
const resultNodeName = 'result';

class In4Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = [inputSocketName.a, inputSocketName.b, inputSocketName.c, inputSocketName.d]) {
    if (inputValueTypes.length !== 4) {
      throw new Error(`inputValueTypes of ${description.typeName}  must have a length of 4, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 4) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 4, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0]), new Socket(inputValueTypes[1], inputNames[1]), new Socket(inputValueTypes[2], inputNames[2]), new Socket(inputValueTypes[3], inputNames[3])], [new Socket(outputValueType, resultNodeName)], () => {
      this.writeOutput(resultNodeName, this.evalFunc(this.readInput(inputNames[0]), this.readInput(inputNames[1]), this.readInput(inputNames[2]), this.readInput(inputNames[3])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

class In3Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = [inputSocketName.a, inputSocketName.b, inputSocketName.c]) {
    if (inputValueTypes.length !== 3) {
      throw new Error(`inputValueTypes of ${description.typeName}  must have a length of 3, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 3) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 3, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0]), new Socket(inputValueTypes[1], inputNames[1]), new Socket(inputValueTypes[2], inputNames[2])], [new Socket(outputValueType, resultNodeName)], () => {
      this.writeOutput(resultNodeName, this.evalFunc(this.readInput(inputNames[0]), this.readInput(inputNames[1]), this.readInput(inputNames[2])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

class In2Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = [inputSocketName.a, inputSocketName.b]) {
    if (inputValueTypes.length !== 2) {
      throw new Error(`inputValueTypes of ${description.typeName}  must have a length of 2, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 2) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 2, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0]), new Socket(inputValueTypes[1], inputNames[1])], [new Socket(outputValueType, resultNodeName)], () => {
      this.writeOutput(resultNodeName, this.evalFunc(this.readInput(inputNames[0]), this.readInput(inputNames[1])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

class In1Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = [inputSocketName.a]) {
    if (inputValueTypes.length !== 1) {
      throw new Error(`inputValueTypes of ${description.typeName}  must have a length of 1, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 1) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 1, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0])], [new Socket(outputValueType, resultNodeName)], () => {
      this.writeOutput(resultNodeName, this.evalFunc(this.readInput(inputNames[0])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

class In0Out1FuncNode extends ImmediateNode {
  constructor(description, graph, outputValueType, evalFunc) {
    super(description, graph, [], [new Socket(outputValueType, resultNodeName)], () => {
      this.writeOutput(resultNodeName, this.evalFunc());
    });
    this.evalFunc = evalFunc;
  }
}

/* eslint-disable no-promise-executor-return */
function sleep(durationInSeconds) {
  return new Promise(resolve => setTimeout(resolve, Math.round(durationInSeconds * 1000)));
}

function resolveSocketValue(engine, inputSocket) {
  // if it has no links, leave value on input socket alone.
  if (inputSocket.links.length === 0) {
    return 0;
  }
  const graph = engine.graph;
  const upstreamLink = inputSocket.links[0];
  // caching the target node + socket here increases engine performance by 8% on average.  This is a hotspot.
  if (upstreamLink._targetNode === undefined || upstreamLink._targetSocket === undefined) {
    Assert.mustBeTrue(inputSocket.links.length === 1);

    // if upstream node is an eval, we just return its last value.
    upstreamLink._targetNode = graph.nodes[upstreamLink.nodeId];
    // what is inputSocket connected to?
    upstreamLink._targetSocket = upstreamLink._targetNode.outputs.find(socket => socket.name === upstreamLink.socketName);
    if (upstreamLink._targetSocket === undefined) {
      throw new Error(`can not find socket with the name ${upstreamLink.socketName}`);
    }
  }
  const upstreamNode = upstreamLink._targetNode;
  const upstreamOutputSocket = upstreamLink._targetSocket;

  // if upstream is a flow/event/async node, do not evaluate it rather just use its existing output socket values
  if (!(upstreamNode instanceof ImmediateNode)) {
    inputSocket.value = upstreamOutputSocket.value;
    return 0;
  }
  let executionSteps = 0;
  if (upstreamNode instanceof ImmediateNode) {
    // resolve all inputs for the upstream node (this is where the recursion happens)
    // TODO: This is a bit dangerous as if there are loops in the graph, this will blow up the stack
    for (const upstreamInputSocket of upstreamNode.inputs) {
      executionSteps += resolveSocketValue(engine, upstreamInputSocket);
    }
    engine.onNodeExecutionStart.emit(upstreamNode);
    upstreamNode.exec();
    executionSteps++;
    engine.onNodeExecutionEnd.emit(upstreamNode);

    // get the output value we wanted.
    inputSocket.value = upstreamOutputSocket.value;
    return executionSteps;
  }
  return 0;
}

class Fiber {
  constructor(engine, nextEval, fiberCompletedListener = undefined) {
    _defineProperty(this, "fiberCompletedListenerStack", []);
    _defineProperty(this, "executionSteps", 0);
    this.engine = engine;
    this.nextEval = nextEval;
    this.graph = engine.graph;
    if (fiberCompletedListener !== undefined) {
      this.fiberCompletedListenerStack.push(fiberCompletedListener);
    }
  }

  // this is syncCommit.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  commit(node, outputSocketName, fiberCompletedListener = undefined) {
    Assert.mustBeTrue(node instanceof FlowNode);
    Assert.mustBeTrue(this.nextEval === null);
    const outputSocket = node.outputs.find(socket => socket.name === outputSocketName);
    if (outputSocket === undefined) {
      throw new Error(`can not find socket with the name ${outputSocketName}`);
    }
    if (outputSocket.links.length > 1) {
      throw new Error('invalid for an output flow socket to have multiple downstream links:' + `${node.description.typeName}.${outputSocket.name} has ${outputSocket.links.length} downlinks`);
    }
    if (outputSocket.links.length === 1) {
      const link = outputSocket.links[0];
      if (link === undefined) {
        throw new Error('link must be defined');
      }
      this.nextEval = link;
    }
    if (fiberCompletedListener !== undefined) {
      this.fiberCompletedListenerStack.push(fiberCompletedListener);
    }
  }

  // returns the number of new execution steps created as a result of this one step
  executeStep() {
    // pop the next node off the queue
    const link = this.nextEval;
    this.nextEval = null;

    // nothing waiting, thus go back and start to evaluate any callbacks, in stack order.
    if (link === null) {
      if (this.fiberCompletedListenerStack.length === 0) {
        return;
      }
      const awaitingCallback = this.fiberCompletedListenerStack.pop();
      if (awaitingCallback === undefined) {
        throw new Error('awaitingCallback is empty');
      }
      awaitingCallback();
      return;
    }
    const node = this.graph.nodes[link.nodeId];
    node.inputs.forEach(inputSocket => {
      if (inputSocket.valueTypeName !== 'flow') {
        this.executionSteps += resolveSocketValue(this.engine, inputSocket);
      }
    });

    // first resolve all input values
    // flow socket is set to true for the one flowing in, while all others are set to false.
    this.engine.onNodeExecutionStart.emit(node);
    if (node instanceof AsyncNode) {
      this.engine.asyncNodes.push(node);
      node.triggered(this.engine, link.socketName, () => {
        // remove from the list of pending async nodes
        const index = this.engine.asyncNodes.indexOf(node);
        this.engine.asyncNodes.splice(index, 1);
        this.engine.onNodeExecutionEnd.emit(node);
        this.executionSteps++;
      });
      return;
    }
    if (node instanceof FlowNode) {
      node.triggered(this, link.socketName);
      this.engine.onNodeExecutionEnd.emit(node);
      this.executionSteps++;
      return;
    }
    throw new TypeError(`should not get here, unhandled node ${node.description.typeName}`);
  }
  isCompleted() {
    return this.fiberCompletedListenerStack.length === 0 && this.nextEval === null;
  }
}

class Engine {
  constructor(graph) {
    // tracking the next node+input socket to execute.
    _defineProperty(this, "fiberQueue", []);
    _defineProperty(this, "asyncNodes", []);
    _defineProperty(this, "eventNodes", []);
    _defineProperty(this, "onNodeExecutionStart", new EventEmitter());
    _defineProperty(this, "onNodeExecutionEnd", new EventEmitter());
    _defineProperty(this, "executionSteps", 0);
    this.graph = graph;
    // collect all event nodes
    Object.values(graph.nodes).forEach(node => {
      if (node instanceof EventNode) {
        this.eventNodes.push(node);
      }
    });
    // init all event nodes at startup
    this.eventNodes.forEach(eventNode => {
      // evaluate input parameters
      eventNode.inputs.forEach(inputSocket => {
        Assert.mustBeTrue(inputSocket.valueTypeName !== 'flow');
        this.executionSteps += resolveSocketValue(this, inputSocket);
      });
      this.onNodeExecutionStart.emit(eventNode);
      eventNode.init(this);
      this.executionSteps++;
      this.onNodeExecutionEnd.emit(eventNode);
    });
  }
  dispose() {
    // dispose all, possibly in-progress, async nodes
    this.asyncNodes.forEach(asyncNode => asyncNode.dispose());

    // dispose all event nodes
    this.eventNodes.forEach(eventNode => eventNode.dispose(this));
  }

  // asyncCommit
  commitToNewFiber(node, outputFlowSocketName, fiberCompletedListener = undefined) {
    Assert.mustBeTrue(node instanceof EventNode || node instanceof AsyncNode);
    const outputSocket = node.outputs.find(socket => socket.name === outputFlowSocketName);
    if (outputSocket === undefined) {
      throw new Error(`no socket with the name ${outputFlowSocketName}`);
    }
    if (outputSocket.links.length > 1) {
      throw new Error('invalid for an output flow socket to have multiple downstream links:' + `${node.description.typeName}.${outputSocket.name} has ${outputSocket.links.length} downlinks`);
    }
    if (outputSocket.links.length === 1) {
      const fiber = new Fiber(this, outputSocket.links[0], fiberCompletedListener);
      this.fiberQueue.push(fiber);
    }
  }

  // NOTE: This does not execute all if there are promises.
  executeAllSync(limitInSeconds = 100, limitInSteps = 100000000) {
    const startDateTime = Date.now();
    let elapsedSeconds = 0;
    let elapsedSteps = 0;
    while (elapsedSteps < limitInSteps && elapsedSeconds < limitInSeconds && this.fiberQueue.length > 0) {
      const currentFiber = this.fiberQueue[0];
      const startingFiberExecutionSteps = currentFiber.executionSteps;
      currentFiber.executeStep();
      elapsedSteps += currentFiber.executionSteps - startingFiberExecutionSteps;
      if (currentFiber.isCompleted()) {
        // remove first element
        this.fiberQueue.shift();
      }
      elapsedSeconds = (Date.now() - startDateTime) * 0.001;
    }
    this.executionSteps += elapsedSteps;
    return elapsedSteps;
  }
  async executeAllAsync(limitInSeconds = 100, limitInSteps = 100000000) {
    const startDateTime = Date.now();
    let elapsedSteps = 0;
    let elapsedTime = 0;
    let iterations = 0;
    do {
      if (iterations > 0) {
        // eslint-disable-next-line no-await-in-loop
        await sleep(0);
      }
      elapsedSteps += this.executeAllSync(limitInSeconds - elapsedTime, limitInSteps - elapsedSteps);
      elapsedTime = (Date.now() - startDateTime) * 0.001;
      iterations += 1;
    } while ((this.asyncNodes.length > 0 || this.fiberQueue.length > 0) && elapsedTime < limitInSeconds && elapsedSteps < limitInSteps);
    return elapsedSteps;
  }
}

// Purpose:
//  - loads a node graph
function readGraphFromJSON(graphJson, registry) {
  var _graphJson$name, _graphJson$metadata, _graphJson$nodes;
  const graph = new Graph(registry);
  graph.name = (_graphJson$name = graphJson === null || graphJson === void 0 ? void 0 : graphJson.name) !== null && _graphJson$name !== void 0 ? _graphJson$name : graph.name;
  graph.metadata = (_graphJson$metadata = graphJson === null || graphJson === void 0 ? void 0 : graphJson.metadata) !== null && _graphJson$metadata !== void 0 ? _graphJson$metadata : graph.metadata;
  if ('variables' in graphJson) {
    var _graphJson$variables;
    readVariablesJSON(graph, (_graphJson$variables = graphJson.variables) !== null && _graphJson$variables !== void 0 ? _graphJson$variables : []);
  }
  if ('customEvents' in graphJson) {
    var _graphJson$customEven;
    readCustomEventsJSON(graph, (_graphJson$customEven = graphJson.customEvents) !== null && _graphJson$customEven !== void 0 ? _graphJson$customEven : []);
  }
  const nodesJson = (_graphJson$nodes = graphJson === null || graphJson === void 0 ? void 0 : graphJson.nodes) !== null && _graphJson$nodes !== void 0 ? _graphJson$nodes : [];
  if (nodesJson.length === 0) {
    Logger.warn('readGraphFromJSON: no nodes specified');
  }

  // create new BehaviorNode instances for each node in the json.
  for (let i = 0; i < nodesJson.length; i += 1) {
    const nodeJson = nodesJson[i];
    readNodeJSON(graph, nodeJson);
  }

  // connect up the graph edges from BehaviorNode inputs to outputs.  This is required to follow execution
  Object.values(graph.nodes).forEach(node => {
    // initialize the inputs by resolving to the reference nodes.
    node.inputs.forEach(inputSocket => {
      inputSocket.links.forEach(link => {
        if (!(link.nodeId in graph.nodes)) {
          throw new Error(`node '${node.description.typeName}' specifies an input '${inputSocket.name}' whose link goes to ` + `a nonexistent upstream node id: ${link.nodeId}`);
        }
        const upstreamNode = graph.nodes[link.nodeId];
        const upstreamOutputSocket = upstreamNode.outputs.find(socket => socket.name === link.socketName);
        if (upstreamOutputSocket === undefined) {
          throw new Error(`node '${node.description.typeName}' specifies an input '${inputSocket.name}' whose link goes to ` + `a nonexistent output '${link.socketName}' on upstream node '${upstreamNode.description.typeName}'`);
        }

        // add, only if unique
        const upstreamLink = new Link(node.id, inputSocket.name);
        if (upstreamOutputSocket.links.findIndex(value => value.nodeId == upstreamLink.nodeId && value.socketName == upstreamLink.socketName) < 0) {
          upstreamOutputSocket.links.push(upstreamLink);
        }
      });
    });
    node.outputs.forEach(outputSocket => {
      outputSocket.links.forEach(link => {
        if (!(link.nodeId in graph.nodes)) {
          throw new Error(`node '${node.description.typeName}' specifies an output '${outputSocket.name}' whose link goes to ` + `a nonexistent downstream node id ${link.nodeId}`);
        }
        const downstreamNode = graph.nodes[link.nodeId];
        const downstreamInputSocket = downstreamNode.inputs.find(socket => socket.name === link.socketName);
        if (downstreamInputSocket === undefined) {
          throw new Error(`node '${node.description.typeName}' specifies an output '${outputSocket.name}' whose link goes to ` + `a nonexistent input '${link.socketName}' on downstream node '${downstreamNode.description.typeName}'`);
        }

        // add, only if unique
        const downstreamLink = new Link(node.id, outputSocket.name);
        if (downstreamInputSocket.links.findIndex(value => value.nodeId == downstreamLink.nodeId && value.socketName == downstreamLink.socketName) < 0) {
          downstreamInputSocket.links.push(downstreamLink);
        }
      });
    });
  });
  return graph;
}
function readNodeJSON(graph, nodeJson) {
  var _nodeJson$label, _nodeJson$metadata;
  if (nodeJson.type === undefined) {
    throw new Error('readGraphFromJSON: no type for node');
  }
  const nodeName = nodeJson.type;
  const nodeConfigurationJson = nodeJson.configuration;
  const nodeConfiguration = {};
  if (nodeConfigurationJson !== undefined) {
    Object.keys(nodeConfigurationJson).forEach(key => {
      nodeConfiguration[key] = nodeConfigurationJson[key];
    });
  }
  const node = graph.createNode(nodeName, nodeJson.id, nodeConfiguration);
  node.label = (_nodeJson$label = nodeJson === null || nodeJson === void 0 ? void 0 : nodeJson.label) !== null && _nodeJson$label !== void 0 ? _nodeJson$label : node.label;
  node.metadata = (_nodeJson$metadata = nodeJson === null || nodeJson === void 0 ? void 0 : nodeJson.metadata) !== null && _nodeJson$metadata !== void 0 ? _nodeJson$metadata : node.metadata;
  if (nodeJson.parameters !== undefined) {
    readNodeParameterJSON(graph, node, nodeJson.parameters);
  }
  if (nodeJson.flows !== undefined) {
    readNodeFlowsJSON(graph, node, nodeJson.flows);
  }
}
function readNodeParameterJSON(graph, node, parametersJson) {
  node.inputs.forEach(socket => {
    if (!(socket.name in parametersJson)) {
      return;
    }
    const inputJson = parametersJson[socket.name];
    if ('value' in inputJson) {
      // eslint-disable-next-line no-param-reassign
      socket.value = graph.registry.values.get(socket.valueTypeName).deserialize(inputJson.value);
    }
    if ('link' in inputJson) {
      const linkJson = inputJson.link;
      socket.links.push(new Link(linkJson.nodeId, linkJson.socket));
    }
  });

  // validate that there are no additional input sockets specified that were not read.
  for (const inputName in parametersJson) {
    const inputSocket = node.inputs.find(socket => socket.name === inputName);
    if (inputSocket === undefined) {
      throw new Error(`node '${node.description.typeName}' specifies an input '${inputName}' that doesn't exist on its node type`);
    }
  }
}
function readNodeFlowsJSON(graph, node, flowsJson) {
  node.outputs.forEach(socket => {
    if (socket.name in flowsJson) {
      const outputLinkJson = flowsJson[socket.name];
      socket.links.push(new Link(outputLinkJson.nodeId, outputLinkJson.socket));
    }
  });

  // validate that there are no additional input sockets specified that were not read.
  for (const outputName in flowsJson) {
    const outputSocket = node.outputs.find(socket => socket.name === outputName);
    if (outputSocket === undefined) {
      throw new Error(`node '${node.description.typeName}' specifies an output '${outputName}' that doesn't exist on its node type`);
    }
  }
}
function readVariablesJSON(graph, variablesJson) {
  for (let i = 0; i < variablesJson.length; i += 1) {
    var _variableJson$label, _variableJson$metadat;
    const variableJson = variablesJson[i];
    const variable = new Variable(variableJson.id, variableJson.name, variableJson.valueTypeName, graph.registry.values.get(variableJson.valueTypeName).deserialize(variableJson.initialValue));
    variable.label = (_variableJson$label = variableJson === null || variableJson === void 0 ? void 0 : variableJson.label) !== null && _variableJson$label !== void 0 ? _variableJson$label : variable.label;
    variable.metadata = (_variableJson$metadat = variableJson === null || variableJson === void 0 ? void 0 : variableJson.metadata) !== null && _variableJson$metadat !== void 0 ? _variableJson$metadat : variable.metadata;
    if (variableJson.id in graph.variables) {
      throw new Error(`duplicate variable id ${variable.id}`);
    }
    graph.variables[variableJson.id] = variable;
  }
}
function readCustomEventsJSON(graph, customEventsJson) {
  for (let i = 0; i < customEventsJson.length; i += 1) {
    var _customEventJson$para, _customEventJson$labe, _customEventJson$meta;
    const customEventJson = customEventsJson[i];
    const parameters = [];
    ((_customEventJson$para = customEventJson.parameters) !== null && _customEventJson$para !== void 0 ? _customEventJson$para : []).forEach(parameterJson => {
      parameters.push(new Socket(parameterJson.valueTypeName, parameterJson.name, graph.registry.values.get(parameterJson.valueTypeName).deserialize(parameterJson.defaultValue)));
    });
    const customEvent = new CustomEvent(customEventJson.id, customEventJson.name, parameters);
    customEvent.label = (_customEventJson$labe = customEventJson === null || customEventJson === void 0 ? void 0 : customEventJson.label) !== null && _customEventJson$labe !== void 0 ? _customEventJson$labe : customEvent.label;
    customEvent.metadata = (_customEventJson$meta = customEventJson === null || customEventJson === void 0 ? void 0 : customEventJson.metadata) !== null && _customEventJson$meta !== void 0 ? _customEventJson$meta : customEvent.metadata;
    if (customEvent.id in graph.customEvents) {
      throw new Error(`duplicate variable id ${customEvent.id}`);
    }
    graph.customEvents[customEvent.id] = customEvent;
  }
}

function writeGraphToJSON(graph) {
  const graphJson = {};
  if (Object.keys(graph.metadata).length > 0) {
    graphJson.metadata = graph.metadata;
  }

  // save custom events
  Object.values(graph.customEvents).forEach(customEvent => {
    const customEventJson = {
      name: customEvent.name,
      id: customEvent.id
    };
    if (customEvent.label.length > 0) {
      customEventJson.label = customEvent.label;
    }
    if (customEvent.parameters.length > 0) {
      const parametersJson = [];
      customEvent.parameters.forEach(parameter => {
        parametersJson.push({
          name: parameter.name,
          valueTypeName: parameter.valueTypeName,
          defaultValue: parameter.value
        });
      });
      customEventJson.parameters = parametersJson;
    }
    if (Object.keys(customEvent.metadata).length > 0) {
      customEventJson.metadata = customEvent.metadata;
    }
    if (graphJson.customEvents === undefined) {
      graphJson.customEvents = [];
    }
    graphJson.customEvents.push(customEventJson);
  });

  // save variables
  Object.values(graph.variables).forEach(variable => {
    const variableJson = {
      valueTypeName: variable.valueTypeName,
      name: variable.name,
      id: variable.id,
      initialValue: graph.registry.values.get(variable.valueTypeName).serialize(variable.initialValue)
    };
    if (variable.label.length > 0) {
      variableJson.label = variable.label;
    }
    if (Object.keys(variable.metadata).length > 0) {
      variableJson.metadata = variable.metadata;
    }
    if (graphJson.variables === undefined) {
      graphJson.variables = [];
    }
    graphJson.variables.push(variableJson);
  });

  // save nodes
  Object.values(graph.nodes).forEach(node => {
    const nodeJson = {
      type: node.description.typeName,
      id: node.id
    };
    if (node.label.length > 0) {
      nodeJson.label = node.label;
    }
    if (Object.keys(node.metadata).length > 0) {
      nodeJson.metadata = node.metadata;
    }
    if (Object.keys(node.description.configuration).length > 0) {
      const configurationJson = {};
      Object.keys(node.configuration).forEach(key => {
        configurationJson[key] = node.configuration[key];
      });
      nodeJson.configuration = configurationJson;
    }
    const parametersJson = {};
    node.inputs.forEach(inputSocket => {
      if (inputSocket.valueTypeName === 'flow') return;
      let parameterJson = undefined;
      if (inputSocket.links.length === 0) {
        parameterJson = {
          value: graph.registry.values.get(inputSocket.valueTypeName).serialize(inputSocket.value)
        };
      } else if (inputSocket.links.length === 1) {
        const link = inputSocket.links[0];
        parameterJson = {
          link: {
            nodeId: link.nodeId,
            socket: link.socketName
          }
        };
      } else {
        throw new Error(`should not get here, inputSocket.links.length = ${inputSocket.links.length} > 1`);
      }
      parametersJson[inputSocket.name] = parameterJson;
    });
    if (Object.keys(parametersJson).length > 0) {
      nodeJson.parameters = parametersJson;
    }
    const flowsJson = {};
    node.outputs.forEach(outputSocket => {
      if (outputSocket.valueTypeName !== 'flow') return;
      if (outputSocket.links.length === 0) return;
      const linkJson = {
        nodeId: outputSocket.links[0].nodeId,
        socket: outputSocket.links[0].socketName
      };
      flowsJson[outputSocket.name] = linkJson;
    });
    if (Object.keys(flowsJson).length > 0) {
      nodeJson.flows = flowsJson;
    }
    if (graphJson.nodes === undefined) {
      graphJson.nodes = [];
    }
    graphJson.nodes.push(nodeJson);
  });
  return graphJson;
}

function writeNodeSpecsToJSON(registry) {
  const nodeSpecsJSON = [];
  const graph = new Graph(registry);
  registry.nodes.getAllNames().forEach(nodeTypeName => {
    const node = graph.createNode(nodeTypeName);
    const nodeSpecJSON = {
      type: nodeTypeName,
      category: node.description.category,
      label: node.description.label,
      inputs: [],
      outputs: [],
      configuration: []
    };
    node.inputs.forEach(inputSocket => {
      const valueType = inputSocket.valueTypeName === 'flow' ? undefined : registry.values.get(inputSocket.valueTypeName);
      let defaultValue = inputSocket.value;
      if (valueType !== undefined) {
        defaultValue = valueType.serialize(defaultValue);
      }
      if (defaultValue === undefined && valueType !== undefined) {
        defaultValue = valueType.serialize(valueType.creator());
      }
      const socketSpecJSON = {
        name: inputSocket.name,
        valueType: inputSocket.valueTypeName,
        defaultValue
      };
      nodeSpecJSON.inputs.push(socketSpecJSON);
    });
    node.outputs.forEach(outputSocket => {
      const socketSpecJSON = {
        name: outputSocket.name,
        valueType: outputSocket.valueTypeName
      };
      nodeSpecJSON.outputs.push(socketSpecJSON);
    });
    nodeSpecsJSON.push(nodeSpecJSON);
  });
  return nodeSpecsJSON;
}

function getNodeDescriptions(importWildcard) {
  return Object.keys(importWildcard).map(key => importWildcard[key]).filter(value => value instanceof NodeDescription);
}
class NodeDescription {
  constructor(typeName, category, label = '', factory, otherTypeNames = [], helpDescription = '', configuration = {}) {
    this.typeName = typeName;
    this.category = category;
    this.label = label;
    this.factory = factory;
    this.otherTypeNames = otherTypeNames;
    this.helpDescription = helpDescription;
    this.configuration = configuration;
  }
}
class NodeDescription2 extends NodeDescription {
  constructor(properties) {
    super(properties.typeName, properties.category, properties.label, properties.factory, properties.otherTypeNames, properties.helpDescription, properties.configuration);
    this.properties = properties;
  }
}

class NodeTypeRegistry {
  constructor() {
    _defineProperty(this, "typeNameToNodeDescriptions", {});
  }
  clear() {
    for (const nodeTypeName in this.typeNameToNodeDescriptions) {
      delete this.typeNameToNodeDescriptions[nodeTypeName];
    }
  }
  register(...descriptions) {
    descriptions.forEach(description => {
      description.otherTypeNames.concat([description.typeName]).forEach(typeName => {
        if (typeName in this.typeNameToNodeDescriptions) {
          throw new Error(`already registered node type ${typeName} (string)`);
        }
        this.typeNameToNodeDescriptions[typeName] = description;
      });
    });
  }
  contains(typeName) {
    return typeName in this.typeNameToNodeDescriptions;
  }
  get(typeName) {
    if (!(typeName in this.typeNameToNodeDescriptions)) {
      throw new Error(`no registered node with type name ${typeName}`);
    }
    return this.typeNameToNodeDescriptions[typeName];
  }
  getAllNames() {
    return Object.keys(this.typeNameToNodeDescriptions);
  }
  getAllDescriptions() {
    return Object.values(this.typeNameToNodeDescriptions);
  }
}

class ValueTypeRegistry {
  constructor() {
    _defineProperty(this, "valueTypeNameToValueType", {});
  }
  register(...valueTypes) {
    valueTypes.forEach(valueType => {
      if (valueType.name in this.valueTypeNameToValueType) {
        throw new Error(`already registered value type ${valueType.name}`);
      }
      this.valueTypeNameToValueType[valueType.name] = valueType;
    });
  }
  get(valueTypeName) {
    if (!(valueTypeName in this.valueTypeNameToValueType)) {
      throw new Error(`can not find value type with name '${valueTypeName}`);
    }
    return this.valueTypeNameToValueType[valueTypeName];
  }
  getAllNames() {
    return Object.keys(this.valueTypeNameToValueType);
  }
}

class Registry {
  constructor() {
    _defineProperty(this, "values", new ValueTypeRegistry());
    _defineProperty(this, "nodes", new NodeTypeRegistry());
  }
}

const nodeTypeNameRegex = /^\w+(\/\w+)*$/;
const socketNameRegex = /^\w+$/;
function validateNodeRegistry(registry) {
  const errorList = [];
  const graph = new Graph(registry);
  registry.nodes.getAllNames().forEach(nodeTypeName => {
    const node = graph.createNode(nodeTypeName);

    // ensure node is registered correctly.
    if (node.description.typeName !== nodeTypeName) {
      if (!node.description.otherTypeNames.includes(nodeTypeName)) {
        errorList.push(`node with typeName '${node.description.typeName}' is registered under a different name '${nodeTypeName}'`);
      }
    }
    if (!nodeTypeNameRegex.test(node.description.typeName)) {
      errorList.push(`invalid node type name on node ${node.description.typeName}`);
    }
    node.inputs.forEach(socket => {
      if (!socketNameRegex.test(socket.name)) {
        errorList.push(`invalid socket name for input socket ${socket.name} on node ${node.description.typeName}`);
      }
      if (socket.valueTypeName === 'flow') {
        return;
      }
      const valueType = registry.values.get(socket.valueTypeName);
      // check to ensure all value types are supported.
      if (valueType === undefined) {
        errorList.push(`node '${node.description.typeName}' has on input socket '${socket.name}' an unregistered value type '${socket.valueTypeName}'`);
      }
    });
    node.outputs.forEach(socket => {
      if (!socketNameRegex.test(socket.name)) {
        errorList.push(`invalid socket name for output socket ${socket.name} on node ${node.description.typeName}`);
      }
      if (socket.valueTypeName === 'flow') {
        return;
      }
      const valueType = registry.values.get(socket.valueTypeName);
      // check to ensure all value types are supported.
      if (valueType === undefined) {
        errorList.push(`node '${node.description.typeName}' has on output socket '${socket.name}' an unregistered value type '${socket.valueTypeName}'`);
      }
    });
  });
  return errorList;
}

const valueTypeNameRegex = /^\w+$/;
function validateValueRegistry(graphRegistry) {
  const errorList = [];
  graphRegistry.values.getAllNames().forEach(valueTypeName => {
    if (!valueTypeNameRegex.test(valueTypeName)) {
      errorList.push(`invalid value type name ${valueTypeName}`);
    }
    const valueType = graphRegistry.values.get(valueTypeName);
    const value = valueType.creator();
    const serializedValue = valueType.serialize(value);
    const deserializedValue = valueType.deserialize(serializedValue);
    const reserializedValue = valueType.serialize(deserializedValue);
    const redeserializedValue = valueType.deserialize(reserializedValue);
    if (JSON.stringify(serializedValue) !== JSON.stringify(reserializedValue)) {
      errorList.push(`value type (${valueTypeName}) reserialization mismatch between ${JSON.stringify(serializedValue)} and ${JSON.stringify(reserializedValue)}`);
    }
    if (typeof deserializedValue !== 'bigint' && JSON.stringify(deserializedValue) !== JSON.stringify(redeserializedValue)) {
      errorList.push(`value type (${valueTypeName}) redeserialization mismatch between ${JSON.stringify(deserializedValue)} and ${JSON.stringify(redeserializedValue)}`);
    }
  });
  return errorList;
}

function validateRegistry(registry) {
  const errorList = [];
  errorList.push(...validateValueRegistry(registry), ...validateNodeRegistry(registry));
  return errorList;
}

function validateGraphAcyclic(graph) {
  // apparently if you can topological sort, it is a DAG according to: https://stackoverflow.com/questions/4168/graph-serialization/4577#4577

  // instead of modifying the graph, I will use metadata to mark it in place.
  Object.values(graph.nodes).forEach(node => {
    // eslint-disable-next-line no-param-reassign
    node.metadata['dag.marked'] = 'false';
  });

  // it appears that we can just keep trimming nodes whose input sockets have no connections.
  // if we can remove all nodes, that means that there are no cycles.

  const nodesToMark = [];
  do {
    // clear array: https://stackoverflow.com/a/1232046
    nodesToMark.length = 0;
    Object.values(graph.nodes).forEach(node => {
      // ignore existing marked nodes.
      if (node.metadata['dag.marked'] === 'true') {
        return;
      }
      let inputsConnected = false;
      node.inputs.forEach(inputSocket => {
        inputSocket.links.forEach(link => {
          // is the other end marked?  If not, then it is still connected.
          if (graph.nodes[link.nodeId].metadata['dag.marked'] === 'false') {
            inputsConnected = true;
          }
        });
      });
      if (!inputsConnected) {
        nodesToMark.push(node);
      }
    });
    nodesToMark.forEach(node => {
      // eslint-disable-next-line no-param-reassign
      node.metadata['dag.marked'] = 'true';
    });
  } while (nodesToMark.length > 0);
  const errorList = [];

  // output errors for each unmarked node
  // also remove the metadata related to DAG marking
  Object.values(graph.nodes).forEach(node => {
    if (node.metadata['dag.marked'] === 'false') {
      errorList.push(`node ${node.description.typeName} is part of a cycle, not a directed acyclic graph`);
    }
    // eslint-disable-next-line no-param-reassign
    delete node.metadata['dag.marked'];
  });
  return errorList;
}

function validateGraphLinks(graph) {
  const errorList = [];
  // for each node
  Object.values(graph.nodes).forEach(node => {
    // for each input socket
    node.inputs.forEach(inputSocket => {
      // ensure that connected output sockets are the same type
      inputSocket.links.forEach(link => {
        // check if the node id is correct
        if (!(link.nodeId in graph.nodes)) {
          errorList.push(`node ${node.description.typeName}.${inputSocket.name} has link using invalid nodeId: ${link.nodeId}`);
          return;
        }

        // check if the socketName is correct
        const upstreamNode = graph.nodes[link.nodeId];
        const outputSocket = upstreamNode.outputs.find(socket => socket.name === link.socketName);
        if (outputSocket === undefined) {
          errorList.push(`node ${node.description.typeName}.${inputSocket.name} has link using a non-existent socket name: ` + `${link.socketName}, it can not be found on upstream output node: ${upstreamNode.description.typeName}`);
          return;
        }

        // check if the socket types align
        if (inputSocket.valueTypeName !== outputSocket.valueTypeName) {
          errorList.push(`type mismatch between ${node.description.typeName}.${inputSocket.name} [${inputSocket.valueTypeName}] ` + `and ${upstreamNode.description.typeName}.${outputSocket.name} [${outputSocket.valueTypeName}]`);
        }
      });
    });
  });
  return errorList;
}

function validateGraph(graph) {
  const errorList = [];
  errorList.push(...validateGraphAcyclic(graph), ...validateGraphLinks(graph));
  return errorList;
}

/* eslint-disable class-methods-use-this */
class DefaultLogger {
  verbose(text) {
    Logger.verbose(text);
  }
  info(text) {
    Logger.info(text);
  }
  warn(text) {
    Logger.warn(text);
  }
  error(text) {
    Logger.error(text);
  }
}

class ManualLifecycleEventEmitter {
  constructor() {
    _defineProperty(this, "startEvent", new EventEmitter());
    _defineProperty(this, "endEvent", new EventEmitter());
    _defineProperty(this, "tickEvent", new EventEmitter());
  }
}

var _class$n;
class OnCustomEvent extends EventNode2 {
  constructor(description, graph, configuration) {
    const customEvent = graph.customEvents[configuration.customEventId] || new CustomEvent('-1', 'undefined');
    super({
      description,
      graph,
      outputs: [new Socket('flow', 'flow'), ...customEvent.parameters.map(parameter => new Socket(parameter.valueTypeName, parameter.name, parameter.value, parameter.label))],
      configuration
    });
    _defineProperty(this, "onCustomEvent", undefined);
    this.customEvent = customEvent;
  }
  init(engine) {
    Assert.mustBeTrue(this.onCustomEvent === undefined);
    this.onCustomEvent = parameters => {
      this.customEvent.parameters.forEach(parameterSocket => {
        if (!(parameterSocket.name in parameters)) {
          throw new Error(`parameters of custom event do not align with parameters of custom event node, missing ${parameterSocket.name}`);
        }
        this.writeOutput(parameterSocket.name, parameters[parameterSocket.name]);
      });
      engine.commitToNewFiber(this, 'flow');
    };
    this.customEvent.eventEmitter.addListener(this.onCustomEvent);
  }
  dispose(engine) {
    Assert.mustBeTrue(this.onCustomEvent !== undefined);
    if (this.onCustomEvent !== undefined) {
      this.customEvent.eventEmitter.removeListener(this.onCustomEvent);
    }
  }
}
_class$n = OnCustomEvent;
_defineProperty(OnCustomEvent, "Description", new NodeDescription2({
  typeName: 'customEvent/onTriggered',
  category: 'Event',
  label: 'On Triggered',
  configuration: {
    customEventId: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$n(description, graph, configuration)
}));

var _class$m;
class TriggerCustomEvent extends FlowNode2 {
  constructor(description, graph, configuration) {
    const customEvent = graph.customEvents[configuration.customEventId] || new CustomEvent('-1', 'undefined');
    super({
      description,
      graph,
      inputs: [new Socket('flow', 'flow'), ...customEvent.parameters.map(parameter => new Socket(parameter.valueTypeName, parameter.name, parameter.value, parameter.label))],
      outputs: [new Socket('flow', 'flow')],
      configuration
    });
    this.customEvent = customEvent;
  }
  triggered(fiber, triggeringSocketName) {
    const parameters = {};
    this.customEvent.parameters.forEach(parameterSocket => {
      parameters[parameterSocket.name] = this.readInput(parameterSocket.name);
    });
    this.customEvent.eventEmitter.emit(parameters);
  }
}
_class$m = TriggerCustomEvent;
_defineProperty(TriggerCustomEvent, "Description", new NodeDescription2({
  typeName: 'customEvent/trigger',
  category: 'Action',
  label: 'Trigger',
  configuration: {
    customEventId: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$m(description, graph, configuration)
}));

var _class$l;
class ExpectTrue extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('boolean', 'condition'), new Socket('string', 'description')], [new Socket('flow', 'flow')]);
  }
  triggered(fiber, triggeredSocketName) {
    Assert.mustBeTrue(this.readInput('condition'), this.readInput('description'));
    fiber.commit(this, 'flow');
  }
}
_class$l = ExpectTrue;
_defineProperty(ExpectTrue, "Description", new NodeDescription('debug/expectTrue', 'Action', 'Assert Expect True', (description, graph) => new _class$l(description, graph)));

var _class$k;
class Log extends FlowNode {
  constructor(description, graph, logger) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('string', 'text'), new Socket('string', 'severity', 'info', undefined, ['verbose', 'info', 'warning', 'error'])], [new Socket('flow', 'flow')]);
    this.logger = logger;
  }
  triggered(fiber, triggeredSocketName) {
    const text = this.readInput('text');
    switch (this.readInput('severity')) {
      case 'verbose':
        this.logger.verbose(text);
        break;
      case 'info':
        this.logger.info(text);
        break;
      case 'warning':
        this.logger.warn(text);
        break;
      case 'error':
        this.logger.error(text);
        break;
    }
    fiber.commit(this, 'flow');
  }
}
_class$k = Log;
_defineProperty(Log, "Description", logger => new NodeDescription('debug/log', 'Action', 'Debug Log', (description, graph) => new _class$k(description, graph, logger)));

var _class$j;
class Branch extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('boolean', 'condition')], [new Socket('flow', 'true'), new Socket('flow', 'false')]);
  }
  triggered(fiber, triggeringSocketName) {
    fiber.commit(this, this.readInput('condition') === true ? 'true' : 'false');
  }
}
_class$j = Branch;
_defineProperty(Branch, "Description", new NodeDescription2({
  typeName: 'flow/branch',
  category: 'Flow',
  label: 'Branch',
  factory: (description, graph) => new _class$j(description, graph),
  helpDescription: "Checks the value of the 'condition' input and if true, executes the 'true' branch, otherwise it executes the 'false' branch."
}));

var _class$i;
class Counter extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('flow', 'reset')], [new Socket('flow', 'flow'), new Socket('integer', 'count')]);
    _defineProperty(this, "count", 0);
  }
  triggered(fiber, triggeringSocketName) {
    switch (triggeringSocketName) {
      case 'flow':
        {
          this.count++;
          this.writeOutput('count', this.count);
          fiber.commit(this, 'flow');
          break;
        }
      case 'reset':
        {
          this.count = 0;
          break;
        }
      default:
        throw new Error('should not get here');
    }
  }
}
_class$i = Counter;
_defineProperty(Counter, "Description", new NodeDescription('flow/counter', 'Flow', 'Counter', (description, graph) => new _class$i(description, graph)));

var _class$h;

// ASYNC - asynchronous evaluation
// also called "delay"

class Delay extends AsyncNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('float', 'duration', 1)], [new Socket('flow', 'flow')]);
    _defineProperty(this, "timeoutPending", false);
  }
  triggered(engine, triggeringSocketName, finished) {
    // if there is a valid timeout running, leave it.
    if (this.timeoutPending) {
      return;
    }

    // otherwise start it.
    this.timeoutPending = true;
    setTimeout(() => {
      // check if cancelled
      if (!this.timeoutPending) return;
      this.timeoutPending = false;
      engine.commitToNewFiber(this, 'flow');
      finished();
    }, this.readInput('duration') * 1000);
  }
  dispose() {
    this.timeoutPending = false;
  }
}
_class$h = Delay;
_defineProperty(Delay, "Description", new NodeDescription2({
  typeName: 'time/delay',
  otherTypeNames: ['flow/delay'],
  category: 'Time',
  label: 'Delay',
  factory: (description, graph) => new _class$h(description, graph)
}));

var _class$g;

// based on Unreal Engine Blueprint DoN node

class DoN extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('integer', 'n', 1), new Socket('flow', 'reset')], [new Socket('flow', 'flow'), new Socket('integer', 'count')]);
    _defineProperty(this, "count", 0);
  }
  triggered(fiber, triggeringSocketName) {
    if (triggeringSocketName === 'reset') {
      this.count = 0;
      return;
    }
    if (triggeringSocketName === 'flow') {
      if (this.count < Number(this.readInput('n'))) {
        this.writeOutput('count', this.count);
        this.count++;
        fiber.commit(this, 'flow');
      }
      return;
    }
    throw new Error('should not get here');
  }
}
_class$g = DoN;
_defineProperty(DoN, "Description", new NodeDescription('flow/doN', 'Flow', 'DoN', (description, graph) => new _class$g(description, graph)));

var _class$f;

// based on Unreal Engine Blueprint DoN node

class DoOnce extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('flow', 'reset')], [new Socket('flow', 'flow')]);
    _defineProperty(this, "firedOnce", false);
  }
  triggered(fiber, triggeringSocketName) {
    if (triggeringSocketName === 'reset') {
      this.firedOnce = false;
      return;
    }
    if (triggeringSocketName === 'flow') {
      if (!this.firedOnce) {
        this.firedOnce = true;
        fiber.commit(this, 'flow');
      }
      return;
    }
    throw new Error('should not get here');
  }
}
_class$f = DoOnce;
_defineProperty(DoOnce, "Description", new NodeDescription('flow/doOnce', 'Flow', 'DoOnce', (description, graph) => new _class$f(description, graph)));

var _class$e;

// as long as this continues to be triggered within the duration period, it will not fire.
// based lousy on https://www.npmjs.com/package/debounce

class Debounce extends AsyncNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('float', 'waitDuration'), new Socket('flow', 'cancel')], [new Socket('flow', 'flow')]);
    _defineProperty(this, "triggerVersion", 0);
  }
  triggered(engine, triggeringSocketName, finished) {
    this.triggerVersion++;

    // if cancelling, just increment triggerVersion and do not set a timer. :)
    if (triggeringSocketName === 'cancel') {
      return;
    }
    const localTriggerCount = this.triggerVersion;
    setTimeout(() => {
      if (this.triggerVersion >= localTriggerCount) {
        // ignore this timer, as it isn't for the most recent trigger
        return;
      }
      engine.commitToNewFiber(this, 'flow');
      finished();
    }, this.readInput('waitDuration') * 1000);
  }
  dispose() {
    this.triggerVersion++; // equivalent to 'cancel' trigger behavior.
  }
}
_class$e = Debounce;
_defineProperty(Debounce, "Description", new NodeDescription('flow/debounce', 'Flow', 'Debounce', (description, graph) => new _class$e(description, graph)));

var _class$d;
class FlipFlop extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow')], [new Socket('flow', 'on'), new Socket('flow', 'off'), new Socket('boolean', 'isOn')]);
    _defineProperty(this, "isOn", true);
  }
  triggered(fiber, triggeringSocketName) {
    this.writeOutput('isOn', this.isOn);
    fiber.commit(this, this.isOn ? 'on' : 'off');
    this.isOn = !this.isOn;
  }
}
_class$d = FlipFlop;
_defineProperty(FlipFlop, "Description", new NodeDescription('flow/flipFlop', 'Flow', 'Flip Flop', (description, graph) => new _class$d(description, graph)));

var _class$c;
class ForLoop extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('integer', 'startIndex'), new Socket('integer', 'endIndex')], [new Socket('flow', 'loopBody'), new Socket('integer', 'index'), new Socket('flow', 'completed')]);
  }
  triggered(fiber, triggeringSocketName) {
    // these outputs are fired sequentially in an async fashion but without delays.
    // Thus a promise is returned and it continually returns a promise until each of the sequences has been executed.
    const startIndex = this.readInput('startIndex');
    const endIndex = this.readInput('endIndex');
    const loopBodyIteration = i => {
      if (i < endIndex) {
        this.writeOutput('index', i);
        fiber.commit(this, 'loopBody', () => {
          loopBodyIteration(i + BigInt(1));
        });
      } else {
        fiber.commit(this, 'completed');
      }
    };
    loopBodyIteration(startIndex);
  }
}
_class$c = ForLoop;
_defineProperty(ForLoop, "Description", new NodeDescription2({
  typeName: 'flow/forLoop',
  category: 'Flow',
  label: 'For Loop',
  factory: (description, graph) => new _class$c(description, graph)
}));

var _class$b;

// based on Unreal Engine Blueprint Gate node

class Gate extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('flow', 'open'), new Socket('flow', 'close'), new Socket('flow', 'toggle'), new Socket('boolean', 'startClosed', true)], [new Socket('flow', 'flow')]);
    _defineProperty(this, "isInitialized", false);
    _defineProperty(this, "isClosed", true);
  }
  triggered(fiber, triggeringSocketName) {
    if (!this.isInitialized) {
      this.isClosed = this.readInput('startClosed');
      this.isInitialized = true;
    }
    switch (triggeringSocketName) {
      case 'flow':
        {
          if (!this.isClosed) {
            fiber.commit(this, 'flow');
          }
          break;
        }
      case 'open':
        {
          this.isClosed = false;
          return;
        }
      case 'close':
        {
          this.isClosed = true;
          return;
        }
      case 'toggle':
        {
          this.isClosed = !this.isClosed;
          return;
        }
    }
  }
}
_class$b = Gate;
_defineProperty(Gate, "Description", new NodeDescription('flow/gate', 'Flow', 'Gate', (description, graph) => new _class$b(description, graph)));

var _class$a;

// https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/flow/

class MultiGate extends FlowNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('flow', 'reset'), new Socket('boolean', 'loop', true), new Socket('integer', 'startIndex', 0)], [new Socket('flow', '1'), new Socket('flow', '2'), new Socket('flow', '3')]);
    _defineProperty(this, "isInitialized", false);
    _defineProperty(this, "nextIndex", 0);
  }
  triggered(fiber, triggeringSocketName) {
    if (!this.isInitialized) {
      this.nextIndex = Number(this.readInput('startIndex'));
    }
    if (this.readInput('loop')) {
      this.nextIndex = this.nextIndex % this.outputs.length;
    }
    switch (triggeringSocketName) {
      case 'reset':
        {
          this.nextIndex = 0;
          return;
        }
      case 'flow':
        {
          if (0 <= this.nextIndex && this.nextIndex < this.outputs.length) {
            fiber.commit(this, this.outputs[this.nextIndex].name);
          }
          this.nextIndex++;
          return;
        }
    }
    // these outputs are fired sequentially in an sync fashion but without delays.
    // Thus a promise is returned and it continually returns a promise until each of the sequences has been executed.
    const sequenceIteration = i => {
      if (i < this.outputs.length) {
        const outputSocket = this.outputs[i];
        fiber.commit(this, outputSocket.name, () => {
          sequenceIteration(i + 1);
        });
      }
    };
    sequenceIteration(0);
  }
}
_class$a = MultiGate;
_defineProperty(MultiGate, "Description", new NodeDescription('flow/multiGate', 'Flow', 'MultiGate', (description, graph) => new _class$a(description, graph)));

var _class$9;

// https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/flow/

class Sequence extends FlowNode {
  constructor(description, graph, configuration) {
    const outputs = [];
    const numOutputs = configuration.numOutputs;
    for (let outputIndex = 1; outputIndex <= numOutputs; outputIndex++) {
      outputs.push(new Socket('flow', `${outputIndex}`));
    }
    super(description, graph, [new Socket('flow', 'flow')], outputs);
  }
  triggered(fiber, triggeringSocketName) {
    // these outputs are fired sequentially in an sync fashion but without delays.
    // Thus a promise is returned and it continually returns a promise until each of the sequences has been executed.
    const sequenceIteration = i => {
      if (i < this.outputs.length) {
        const outputSocket = this.outputs[i];
        fiber.commit(this, outputSocket.name, () => {
          sequenceIteration(i + 1);
        });
      }
    };
    sequenceIteration(0);
  }
}
_class$9 = Sequence;
_defineProperty(Sequence, "Description", new NodeDescription2({
  typeName: 'flow/sequence',
  category: 'Flow',
  label: 'Sequence',
  configuration: {
    numOutputs: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$9(description, graph, configuration)
}));

var _class$8;

// based on the description here: https://blog.webdevsimplified.com/2022-03/debounce-vs-throttle/

class Throttle extends AsyncNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('float', 'duration', 1), new Socket('flow', 'cancel')], [new Socket('flow', 'flow')]);
    _defineProperty(this, "triggerVersion", 0);
    _defineProperty(this, "timeoutPending", false);
  }
  triggered(engine, triggeringSocketName, finished) {
    // if cancelling, just increment triggerVersion and do not set a timer. :)
    if (triggeringSocketName === 'cancel') {
      if (this.timeoutPending) {
        this.triggerVersion++;
        this.timeoutPending = false;
      }
      return;
    }

    // if there is a valid timeout running, leave it.
    if (this.timeoutPending) {
      return;
    }

    // otherwise start it.
    this.triggerVersion++;
    const localTriggerCount = this.triggerVersion;
    this.timeoutPending = true;
    setTimeout(() => {
      if (this.triggerVersion !== localTriggerCount) {
        return;
      }
      Assert.mustBeTrue(this.timeoutPending);
      this.timeoutPending = false;
      engine.commitToNewFiber(this, 'flow');
      finished();
    }, this.readInput('duration') * 1000);
  }
  dispose() {
    this.triggerVersion++; // equivalent to 'cancel' trigger behavior.
    this.timeoutPending = false;
  }
}
_class$8 = Throttle;
_defineProperty(Throttle, "Description", new NodeDescription('flow/throttle', 'Flow', 'Throttle', (description, graph) => new _class$8(description, graph)));

var _class$7;

// this is equivalent to Promise.all()
class WaitAll extends FlowNode {
  constructor(description, graph, numInputs) {
    const inputs = [];
    for (let inputIndex = 1; inputIndex <= numInputs; inputIndex++) {
      inputs.push(new Socket('flow', `${inputIndex}`));
    }
    super(description, graph, [...inputs, new Socket('flow', 'reset'), new Socket('boolean', 'autoReset')], [new Socket('flow', 'flow')]);
    _defineProperty(this, "isOn", true);
    _defineProperty(this, "triggeredMap", {});
    _defineProperty(this, "triggeredCount", 0);
    _defineProperty(this, "outputTriggered", false);
    this.numInputs = numInputs;
    this.reset();
  }
  reset() {
    for (let inputIndex = 1; inputIndex <= this.numInputs; inputIndex++) {
      this.triggeredMap[`${inputIndex}`] = false;
    }
    this.triggeredCount = 0;
    this.outputTriggered = false;
  }
  triggered(fiber, triggeringSocketName) {
    if (triggeringSocketName === 'reset') {
      this.reset();
      return;
    }
    if (this.triggeredMap[triggeringSocketName]) {
      return;
    }
    this.triggeredMap[triggeringSocketName] = true;
    this.triggeredCount++;

    // if a & b are triggered, first output!
    if (this.triggeredCount === this.numInputs && !this.outputTriggered) {
      fiber.commit(this, 'flow');
      this.outputTriggered = true;

      // auto-reset if required.
      if (this.readInput('autoReset') === true) {
        this.reset();
      }
    }
  }
}
_class$7 = WaitAll;
_defineProperty(WaitAll, "Description", new NodeDescription2({
  typeName: 'flow/waitAll',
  category: 'Flow',
  label: 'WaitAll',
  configuration: {
    numInputs: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$7(description, graph, (configuration === null || configuration === void 0 ? void 0 : configuration.numInputs) || 3)
}));

var _class$6;
// inspired by: https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Events/
class LifecycleOnEnd extends EventNode {
  constructor(description, graph, lifecycleEventEmitter) {
    super(description, graph, [], [new Socket('flow', 'flow')]);
    _defineProperty(this, "onEndEvent", undefined);
    this.lifecycleEventEmitter = lifecycleEventEmitter;
  }
  init(engine) {
    Assert.mustBeTrue(this.onEndEvent === undefined);
    this.onEndEvent = () => {
      engine.commitToNewFiber(this, 'flow');
    };
    this.lifecycleEventEmitter.endEvent.addListener(this.onEndEvent);
  }
  dispose(engine) {
    Assert.mustBeTrue(this.onEndEvent !== undefined);
    if (this.onEndEvent !== undefined) {
      this.lifecycleEventEmitter.endEvent.removeListener(this.onEndEvent);
    }
  }
}
_class$6 = LifecycleOnEnd;
_defineProperty(LifecycleOnEnd, "Description", lifecycleEventEmitter => new NodeDescription('lifecycle/onEnd', 'Event', 'On End', (description, graph) => new _class$6(description, graph, lifecycleEventEmitter)));

var _class$5;
// inspired by: https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Events/
class LifecycleOnStart extends EventNode {
  constructor(description, graph, lifecycleEventEmitter) {
    super(description, graph, [], [new Socket('flow', 'flow')]);
    _defineProperty(this, "onStartEvent", undefined);
    this.lifecycleEventEmitter = lifecycleEventEmitter;
  }
  init(engine) {
    Assert.mustBeTrue(this.onStartEvent === undefined);
    this.onStartEvent = () => {
      engine.commitToNewFiber(this, 'flow');
    };
    this.lifecycleEventEmitter.startEvent.addListener(this.onStartEvent);
  }
  dispose(engine) {
    Assert.mustBeTrue(this.onStartEvent !== undefined);
    if (this.onStartEvent !== undefined) {
      this.lifecycleEventEmitter.startEvent.removeListener(this.onStartEvent);
    }
  }
}
_class$5 = LifecycleOnStart;
_defineProperty(LifecycleOnStart, "Description", lifecycleEventEmitter => new NodeDescription('lifecycle/onStart', 'Event', 'On Start', (description, graph) => new _class$5(description, graph, lifecycleEventEmitter)));

var _class$4;
// inspired by: https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Events/
class LifecycleOnTick extends EventNode {
  constructor(description, graph, lifecycleEventEmitter) {
    super(description, graph, [], [new Socket('flow', 'flow'), new Socket('float', 'deltaSeconds')]);
    _defineProperty(this, "onTickEvent", undefined);
    this.lifecycleEventEmitter = lifecycleEventEmitter;
  }
  init(engine) {
    Assert.mustBeTrue(this.onTickEvent === undefined);
    let lastTickTime = Date.now();
    this.onTickEvent = () => {
      const currentTime = Date.now();
      const deltaSeconds = (currentTime - lastTickTime) * 0.001;
      this.writeOutput('deltaSeconds', deltaSeconds);
      engine.commitToNewFiber(this, 'flow');
      lastTickTime = currentTime;
    };
    this.lifecycleEventEmitter.tickEvent.addListener(this.onTickEvent);
  }
  dispose(engine) {
    Assert.mustBeTrue(this.onTickEvent !== undefined);
    if (this.onTickEvent !== undefined) {
      this.lifecycleEventEmitter.tickEvent.removeListener(this.onTickEvent);
    }
  }
}
_class$4 = LifecycleOnTick;
_defineProperty(LifecycleOnTick, "Description", lifecycleEventEmitter => new NodeDescription('lifecycle/onTick', 'Event', 'On Tick', (description, graph) => new _class$4(description, graph, lifecycleEventEmitter)));

const Constant$b = new NodeDescription('math/boolean', 'Logic', 'Boolean', (description, graph) => new In1Out1FuncNode(description, graph, ['boolean'], 'boolean', a => a));
const And = new NodeDescription('math/and/boolean', 'Logic', '∧', (description, graph) => new In2Out1FuncNode(description, graph, ['boolean', 'boolean'], 'boolean', (a, b) => a && b));
const Or = new NodeDescription('math/or/boolean', 'Logic', '∨', (description, graph) => new In2Out1FuncNode(description, graph, ['boolean', 'boolean'], 'boolean', (a, b) => a || b));
const Not = new NodeDescription('math/negate/boolean', 'Logic', '¬', (description, graph) => new In1Out1FuncNode(description, graph, ['boolean'], 'boolean', a => !a));
const ToFloat$2 = new NodeDescription('math/toFloat/boolean', 'Logic', 'To Float', (description, graph) => new In1Out1FuncNode(description, graph, ['boolean'], 'float', a => a ? 1 : 0));
const Equal$b = new NodeDescription('math/equal/boolean', 'Logic', '=', (description, graph) => new In2Out1FuncNode(description, graph, ['boolean', 'boolean'], 'boolean', (a, b) => a === b));
const toInteger = new NodeDescription('math/toInteger/boolean', 'Logic', 'To Integer', (description, graph) => new In1Out1FuncNode(description, graph, ['boolean'], 'integer', a => a ? 1n : 0n));

var BooleanNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$b,
  And: And,
  Or: Or,
  Not: Not,
  ToFloat: ToFloat$2,
  Equal: Equal$b,
  toInteger: toInteger
});

const BooleanValue = new ValueType('boolean', () => false, value => typeof value === 'string' ? value.toLowerCase() === 'true' : value, value => value, (start, end, t) => t < 0.5 ? start : end);

const EPSILON = 0.000001; // chosen from gl-matrix

function equalsTolerance(a, b, tolerance = EPSILON) {
  return Math.abs(a - b) < tolerance;
}
function degreesToRadians(a) {
  return a * (Math.PI / 180);
}
function radiansToDegrees(a) {
  return a * (180 / Math.PI);
}
function clamp(a, min, max) {
  return a < min ? min : a > max ? max : a;
}

// Unreal Engine Blueprint Float nodes: https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Math/Float/

const Constant$a = new NodeDescription('math/float', 'Logic', 'Float', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', a => a));
const Add$8 = new NodeDescription('math/add/float', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => a + b));
const Subtract$8 = new NodeDescription('math/subtract/float', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => a - b));
const Negate$9 = new NodeDescription('math/negate/float', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', a => -a));
const Multiply$4 = new NodeDescription('math/multiply/float', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => a * b));
const Divide$1 = new NodeDescription('math/divide/float', 'Logic', '÷', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => a / b));
const Modulus$1 = new NodeDescription('math/modulus/float', 'Logic', 'MOD', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => a % b));
const Power = new NodeDescription('math/pow/float', 'Logic', 'POW', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', Math.pow));
const SquareRoot = new NodeDescription('math/sqrt/float', 'Logic', '√', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.sqrt));
const E = new NodeDescription('math/e/float', 'Logic', '𝑒', (description, graph) => new In0Out1FuncNode(description, graph, 'float', () => Math.E));
const Exp$1 = new NodeDescription('math/exp/float', 'Logic', 'EXP', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.exp));
const Ln$1 = new NodeDescription('math/ln/float', 'Logic', 'LN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.log));
const Log2 = new NodeDescription('math/log2/float', 'Logic', 'LOG2', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.log2));
const Log10 = new NodeDescription('math/log10/float', 'Logic', 'LOG10', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.log10));
const PI = new NodeDescription('math/pi/float', 'Logic', 'π', (description, graph) => new In0Out1FuncNode(description, graph, 'float', () => Math.PI));
const Sin = new NodeDescription('math/sin/float', 'Logic', 'SIN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.sin));
const Asin = new NodeDescription('math/asin/float', 'Logic', 'ASIN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.asin));
const Cos = new NodeDescription('math/cos/float', 'Logic', 'COS', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.cos));
const Acos = new NodeDescription('math/acos/float', 'Logic', 'ACOS', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.acos));
const Tan = new NodeDescription('math/tan/float', 'Logic', 'TAN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.tan));
const RadiansToDegrees = new NodeDescription('math/radiansToDegrees/float', 'Logic', 'To Degrees', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', a => radiansToDegrees(a), ['radian']));
const DegreesToRadians = new NodeDescription('math/degreesToRadians/float', 'Logic', 'To Radians', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', a => degreesToRadians(a), ['degrees']));
const Atan = new NodeDescription('math/atan/float', 'Logic', 'ATAN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.atan));
const Mix$7 = new NodeDescription('math/mix/float', 'Logic', 'MIX', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'float', (a, b, t) => {
  const s = 1 - t;
  return a * s + b * t;
}, ['a', 'b', 't']));
const ToFloat$1 = new NodeDescription('math/toFloat/float', 'Logic', 'To Float', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', a => Number(a)));
const Min$1 = new NodeDescription('math/min/float', 'Logic', 'MIN', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => Math.min(a, b) // TODO: can I jsut pass in Math.min?
));

const Max$1 = new NodeDescription('math/max/float', 'Logic', 'MAX', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'float', (a, b) => Math.max(a, b) // TODO: can I jsut pass in Math.max?
));

const Clamp$1 = new NodeDescription('math/clamp/float', 'Logic', 'CLAMP', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'float', (value, min, max) => value < min ? min : value > max ? max : value, ['value', 'min', 'max']));
const Abs$1 = new NodeDescription('math/abs/float', 'Logic', 'ABS', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.abs));
const Sign$1 = new NodeDescription('math/sign/float', 'Logic', 'SIGN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.sign));
const Floor = new NodeDescription('math/floor/float', 'Logic', 'FLOOR', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.floor));
const Ceil = new NodeDescription('math/ceil/float', 'Logic', 'CEIL', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.ceil));
const Round = new NodeDescription('math/round/float', 'Logic', 'ROUND', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.round));
const Trunc = new NodeDescription('math/trunc/float', 'Logic', 'TRUNC', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'float', Math.trunc));
const Random = new NodeDescription('math/random/float', 'Logic', 'RANDOM', (description, graph) => new In0Out1FuncNode(description, graph, 'float', Math.random));
const Equal$a = new NodeDescription('math/equal/float', 'Logic', '=', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'boolean', (a, b) => a === b, ['a', 'b']));
const EqualTolerance = new NodeDescription('math/equalTolerance/float', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'boolean', (a, b, tolerance) => equalsTolerance(a, b, tolerance), ['a', 'b', 'tolerance']));
const GreaterThan$1 = new NodeDescription('math/greaterThan/float', 'Logic', '>', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'boolean', (a, b) => a > b));
const GreaterThanOrEqual$1 = new NodeDescription('math/greaterThanOrEqual/float', 'Logic', '≥', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'boolean', (a, b) => a >= b));
const LessThan$1 = new NodeDescription('math/lessThan/float', 'Logic', '<', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'boolean', (a, b) => a < b));
const LessThanOrEqual$1 = new NodeDescription('math/lessThanOrEqual/float', 'Logic', '≤', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'boolean', (a, b) => a <= b));
const IsNaN = new NodeDescription('math/isNaN/float', 'Logic', 'isNaN', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'boolean', Number.isNaN));
const IsInf = new NodeDescription('math/isInf/float', 'Logic', 'isInf', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'boolean', a => !Number.isFinite(a) && !Number.isNaN(a)));

var FloatNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$a,
  Add: Add$8,
  Subtract: Subtract$8,
  Negate: Negate$9,
  Multiply: Multiply$4,
  Divide: Divide$1,
  Modulus: Modulus$1,
  Power: Power,
  SquareRoot: SquareRoot,
  E: E,
  Exp: Exp$1,
  Ln: Ln$1,
  Log2: Log2,
  Log10: Log10,
  PI: PI,
  Sin: Sin,
  Asin: Asin,
  Cos: Cos,
  Acos: Acos,
  Tan: Tan,
  RadiansToDegrees: RadiansToDegrees,
  DegreesToRadians: DegreesToRadians,
  Atan: Atan,
  Mix: Mix$7,
  ToFloat: ToFloat$1,
  Min: Min$1,
  Max: Max$1,
  Clamp: Clamp$1,
  Abs: Abs$1,
  Sign: Sign$1,
  Floor: Floor,
  Ceil: Ceil,
  Round: Round,
  Trunc: Trunc,
  Random: Random,
  Equal: Equal$a,
  EqualTolerance: EqualTolerance,
  GreaterThan: GreaterThan$1,
  GreaterThanOrEqual: GreaterThanOrEqual$1,
  LessThan: LessThan$1,
  LessThanOrEqual: LessThanOrEqual$1,
  IsNaN: IsNaN,
  IsInf: IsInf
});

const cSeparator = /[^\d+.-]+/;
function parseSafeFloat(text, fallback = 0) {
  try {
    return Number.parseFloat(text);
  } catch (_unused) {
    return fallback;
  }
}
function parseSafeFloats(text, fallback = 0) {
  return text.split(cSeparator).filter(Boolean).map(value => parseSafeFloat(value, fallback));
}
function toSafeString(elements) {
  return `[${elements.join(',')}]`;
}

const FloatValue = new ValueType('float', () => 0, value => typeof value === 'string' ? parseSafeFloat(value, 0) : value, value => value, (start, end, t) => start * (1 - t) + end * t);

// Unreal Engine Integer Blueprints API: https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Math/Integer/

const Constant$9 = new NodeDescription('math/integer', 'Logic', 'Integer', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'integer', a => a));
const Add$7 = new NodeDescription('math/add/integer', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a + b));
const Subtract$7 = new NodeDescription('math/subtract/integer', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a - b));
const Negate$8 = new NodeDescription('math/negate/integer', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'integer', a => -a));
const Multiply$3 = new NodeDescription('math/multiply/integer', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a * b));
const Divide = new NodeDescription('math/divide/integer', 'Logic', '÷', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a / b));
const Modulus = new NodeDescription('math/modulus/integer', 'Logic', 'MOD', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a % b));
const ToFloat = new NodeDescription('math/toFloat/integer', 'Logic', 'To Float', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'float', a => Number(a)));
const Min = new NodeDescription('math/min/integer', 'Logic', 'MIN', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a > b ? b : a));
const Max = new NodeDescription('math/max/integer', 'Logic', 'MAX', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'integer', (a, b) => a > b ? a : b));
const Clamp = new NodeDescription('math/clamp/integer', 'Logic', 'CLAMP', (description, graph) => new In3Out1FuncNode(description, graph, ['integer', 'integer', 'integer'], 'integer', (value, min, max) => value < min ? min : value > max ? max : value, ['value', 'min', 'max']));
const Abs = new NodeDescription('math/abs/integer', 'Logic', 'ABS', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'integer', a => a < BigInt(0) ? -a : a));
const Sign = new NodeDescription('math/sign/integer', 'Logic', 'SIGN', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'integer', a => BigInt(a < 0 ? -1 : a > 0 ? 1 : 0)));
const Equal$9 = new NodeDescription('math/equal/integer', 'Logic', '=', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'boolean', (a, b) => a === b));
const GreaterThan = new NodeDescription('math/greaterThan/integer', 'Logic', '>', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'boolean', (a, b) => a > b));
const GreaterThanOrEqual = new NodeDescription('math/greaterThanOrEqual/integer', 'Logic', '≥', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'boolean', (a, b) => a >= b));
const LessThan = new NodeDescription('math/lessThan/integer', 'Logic', '<', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'boolean', (a, b) => a < b));
const LessThanOrEqual = new NodeDescription('math/lessThanOrEqual/integer', 'Logic', '≤', (description, graph) => new In2Out1FuncNode(description, graph, ['integer', 'integer'], 'boolean', (a, b) => a <= b));
const toBoolean = new NodeDescription('math/toBoolean/integer', 'Logic', 'To Boolean', (description, graph) => new In1Out1FuncNode(description, graph, ['integer'], 'boolean', a => a !== 0n));

var IntegerNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$9,
  Add: Add$7,
  Subtract: Subtract$7,
  Negate: Negate$8,
  Multiply: Multiply$3,
  Divide: Divide,
  Modulus: Modulus,
  ToFloat: ToFloat,
  Min: Min,
  Max: Max,
  Clamp: Clamp,
  Abs: Abs,
  Sign: Sign,
  Equal: Equal$9,
  GreaterThan: GreaterThan,
  GreaterThanOrEqual: GreaterThanOrEqual,
  LessThan: LessThan,
  LessThanOrEqual: LessThanOrEqual,
  toBoolean: toBoolean
});

const IntegerValue = new ValueType('integer', () => BigInt(0), value => BigInt(value), value => Number.MIN_SAFE_INTEGER <= value && value <= Number.MAX_SAFE_INTEGER ? Number(value) : value.toString(),
// prefer string to ensure full range is covered

(start, end, t) => BigInt(Number(start) * (1 - t) + Number(end) * t));

const Constant$8 = new NodeDescription('logic/string', 'Logic', 'String', (description, graph) => new In1Out1FuncNode(description, graph, ['string'], 'string', a => a));
const Concat = new NodeDescription('logic/concat/string', 'Logic', 'Concat', (description, graph) => new In2Out1FuncNode(description, graph, ['string', 'string'], 'string', (a, b) => a.concat(b)));
const Includes = new NodeDescription('logic/includes/string', 'Logic', 'Includes', (description, graph) => new In2Out1FuncNode(description, graph, ['string', 'string'], 'boolean', (a, b) => a.includes(b)));
const Length$4 = new NodeDescription('logic/length/string', 'Logic', 'Length', (description, graph) => new In1Out1FuncNode(description, graph, ['string'], 'integer', a => BigInt(a.length)));
const Equal$8 = new NodeDescription('math/equal/string', 'Logic', '=', (description, graph) => new In2Out1FuncNode(description, graph, ['string', 'string'], 'boolean', (a, b) => a === b));

var StringNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$8,
  Concat: Concat,
  Includes: Includes,
  Length: Length$4,
  Equal: Equal$8
});

const StringValue = new ValueType('string', () => '', value => value, value => value, (start, end, t) => t < 0.5 ? start : end);

var _class$3;
class VariableSet extends FlowNode {
  static GetDescription(graph, variableId) {
    const variable = graph.variables[variableId];
    return new NodeDescription(`variable/set/${variable.id}`, 'Action', `Set`, (description, graph) => new VariableSet(description, graph, variable));
  }
  constructor(description, graph, configuration) {
    const variable = graph.variables[configuration.variableId] || new Variable('-1', 'undefined', 'string', '');
    super(description, graph, [new Socket('flow', 'flow'), new Socket(variable.valueTypeName, 'value', undefined, variable.name) // variable name is a label so variable can be renamed without breaking graph.
    ], [new Socket('flow', 'flow')], configuration);
    this.variable = variable;
  }
  triggered(fiber, triggeredSocketName) {
    this.variable.set(this.readInput('value'));
    fiber.commit(this, 'flow');
  }
}
_class$3 = VariableSet;
_defineProperty(VariableSet, "Description", new NodeDescription2({
  typeName: 'variable/set',
  category: 'Action',
  label: 'Set',
  configuration: {
    variableId: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$3(description, graph, configuration)
}));

var _class$2;
class VariableGet extends ImmediateNode {
  constructor(description, graph, configuration) {
    const variable = graph.variables[configuration.variableId] || new Variable('-1', 'undefined', 'string', '');
    super(description, graph, [], [new Socket(variable.valueTypeName, 'value', undefined, variable.name)],
    // output socket label uses variable name like UE4, but name is value to avoid breaking graph when variable is renamed
    () => {
      this.writeOutput('value', variable.get());
    }, configuration);
  }
}
_class$2 = VariableGet;
_defineProperty(VariableGet, "Description", new NodeDescription2({
  typeName: 'variable/get',
  category: 'Query',
  label: 'Get',
  configuration: {
    variableId: {
      valueType: 'number'
    }
  },
  factory: (description, graph, configuration) => new _class$2(description, graph, configuration)
}));

const EasingFunctions = {
  linear: t => t,
  quadratic: t => t * t,
  cubic: t => t * t * t,
  quartric: t => t * t * t * t,
  quintic: t => t * t * t * t * t,
  sine: t => 1 - Math.cos(t * Math.PI / 2),
  exponential: t => Math.pow(2, 10 * (t - 1)),
  circle: t => 1 - Math.sqrt(1 - t * t),
  back: t => {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  elastic: t => 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * Math.PI),
  bounce: t => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      const _t = t - 1.5 / 2.75;
      return 7.5625 * _t * _t + 0.75;
    }
    if (t < 2.5 / 2.75) {
      const _t2 = t - 2.25 / 2.75;
      return 7.5625 * _t2 * _t2 + 0.9375;
    }
    const t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  }
};
const EasingModes = {
  in: easing => {
    return easing;
  },
  out: easing => {
    return t => 1 - easing(1 - t);
  },
  inOut: easing => {
    return t => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  }
};

var _class$1;
class Easing extends ImmediateNode {
  constructor(description, graph) {
    super(description, graph, [new Socket('string', 'easingFunction', 'linear', undefined, Object.keys(EasingFunctions)), new Socket('string', 'easingMode', 'inOut', undefined, Object.keys(EasingModes)), new Socket('float', 't')], [new Socket('float', 't')], () => {
      const easingFunction = EasingFunctions[this.readInput('easingFunction')];
      const easingMode = EasingModes[this.readInput('easingMode')];
      const easing = easingMode(easingFunction);
      const inputT = this.readInput('t');
      this.writeOutput('t', easing(inputT));
    });
  }
}
_class$1 = Easing;
_defineProperty(Easing, "Description", new NodeDescription('math/easing', 'Logic', 'Easing', (description, graph) => new _class$1(description, graph)));

function toCamelCase(text) {
  if (text.length > 0) {
    return text.slice(0, 1).toLocaleUpperCase() + text.slice(1);
  }
  return text;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function registerSerializersForValueType(registry, valueTypeName) {
  const camelCaseValueTypeName = toCamelCase(valueTypeName);
  registry.nodes.register(new NodeDescription(`math/to${camelCaseValueTypeName}/string`, 'Logic', `To ${camelCaseValueTypeName}`, (graph, nodeType) => new In1Out1FuncNode(graph, nodeType, ['string'], valueTypeName, a => registry.values.get(valueTypeName).deserialize(a))), new NodeDescription(`math/toString/${valueTypeName}`, 'Logic', 'To String', (graph, nodeType) => new In1Out1FuncNode(graph, nodeType, [valueTypeName], 'string', a => registry.values.get(valueTypeName).serialize(a))));
}

// Unreal Engine Blueprint Time nodes: https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Utilities/Time/

const Now = new NodeDescription('time/now', 'Logic', 'Now', (description, graph) => {
  // ensure we do not leak current actual time, just time since initialization?
  const startTime = Date.now();
  return new In0Out1FuncNode(description, graph, 'float', () => (Date.now() - startTime) / 1000);
});

var TimeNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Now: Now
});

/* eslint-disable max-len */
function registerCoreProfile(registry, logger = new DefaultLogger(), lifecycleEventEmitter = new ManualLifecycleEventEmitter()) {
  const {
    nodes,
    values
  } = registry;

  // pull in value type nodes
  values.register(BooleanValue);
  values.register(StringValue);
  values.register(IntegerValue);
  values.register(FloatValue);

  // pull in value type nodes
  nodes.register(...getNodeDescriptions(StringNodes));
  nodes.register(...getNodeDescriptions(BooleanNodes));
  nodes.register(...getNodeDescriptions(IntegerNodes));
  nodes.register(...getNodeDescriptions(FloatNodes));

  // custom events

  nodes.register(OnCustomEvent.Description);
  nodes.register(TriggerCustomEvent.Description);

  // variables

  nodes.register(VariableGet.Description);
  nodes.register(VariableSet.Description);

  // complex logic

  nodes.register(Easing.Description);

  // actions

  nodes.register(Log.Description(logger));
  nodes.register(ExpectTrue.Description);

  // events

  nodes.register(LifecycleOnStart.Description(lifecycleEventEmitter));
  nodes.register(LifecycleOnEnd.Description(lifecycleEventEmitter));
  nodes.register(LifecycleOnTick.Description(lifecycleEventEmitter));

  // time

  nodes.register(Delay.Description);
  nodes.register(...getNodeDescriptions(TimeNodes));

  // flow control

  nodes.register(Branch.Description);
  nodes.register(FlipFlop.Description);
  nodes.register(ForLoop.Description);
  nodes.register(Sequence.Description);
  nodes.register(Debounce.Description);
  nodes.register(Throttle.Description);
  nodes.register(DoN.Description);
  nodes.register(DoOnce.Description);
  nodes.register(Gate.Description);
  nodes.register(MultiGate.Description);
  nodes.register(WaitAll.Description);
  nodes.register(Counter.Description);

  // string converters

  ['boolean', 'float', 'integer'].forEach(valueTypeName => {
    registerSerializersForValueType(registry, valueTypeName);
  });
  return registry;
}

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  clone(result = new Vec2()) {
    return result.set(this.x, this.y);
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
}
function vec2Equals(a, b, tolerance = EPSILON) {
  return equalsTolerance(a.x, b.x, tolerance) && equalsTolerance(a.y, b.y, tolerance);
}
function vec2Add(a, b, result = new Vec2()) {
  return result.set(a.x + b.x, a.y + b.y);
}
function vec2Subtract(a, b, result = new Vec2()) {
  return result.set(a.x - b.x, a.y - b.y);
}
function vec2MultiplyByScalar(a, b, result = new Vec2()) {
  return result.set(a.x * b, a.y * b);
}
function vec2Negate(a, result = new Vec2()) {
  return result.set(-a.x, -a.y);
}
function vec2Length(a) {
  return Math.sqrt(vec2Dot(a, a));
}
function vec2Normalize(a, result = new Vec2()) {
  const invLength = 1 / vec2Length(a);
  return vec2MultiplyByScalar(a, invLength, result);
}
function vec2Dot(a, b) {
  return a.x * b.x + a.y * b.y;
}
function vec2Mix(a, b, t, result = new Vec2()) {
  const s = 1 - t;
  return result.set(a.x * s + b.x * t, a.y * s + b.y * t);
}
function vec2FromArray(array, offset = 0, result = new Vec2()) {
  return result.set(array[offset + 0], array[offset + 1]);
}
function vec2ToArray(a, array, offset = 0) {
  array[offset + 0] = a.x;
  array[offset + 1] = a.y;
}
function vec2ToString(a) {
  return toSafeString([a.x, a.y]);
}
function vec2Parse(text, result = new Vec2()) {
  return vec2FromArray(parseSafeFloats(text), 0, result);
}

// uses OpenGL matrix layout where each column is specified subsequently in order from left to right.
// ( x, y, 1 ) x [ 0  3  6 ] = ( x', y', 1 )
//               [ 1  4  7 ]
//               [ 2  5  8 ]
// where elements 2 and 5 would be translation in 2D, as they would multiplied
// by the last virtual element of the 2D vector.
const NUM_ROWS$1 = 3;
const NUM_COLUMNS$1 = 3;
const NUM_ELEMENTS$1 = NUM_ROWS$1 * NUM_COLUMNS$1;
class Mat3 {
  constructor(elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]) {
    this.elements = elements;
    if (elements.length !== NUM_ELEMENTS$1) {
      throw new Error(`elements must have length ${NUM_ELEMENTS$1}, got ${elements.length}`);
    }
  }
  clone(result = new Mat3()) {
    return result.set(this.elements);
  }
  set(elements) {
    if (elements.length !== NUM_ELEMENTS$1) {
      throw new Error(`elements must have length ${NUM_ELEMENTS$1}, got ${elements.length}`);
    }
    for (let i = 0; i < NUM_ELEMENTS$1; i++) {
      this.elements[i] = elements[i];
    }
    return this;
  }
}
function mat3SetColumn3(m, columnIndex, column, result = new Mat3()) {
  const re = result.set(m.elements).elements;
  const base = columnIndex * NUM_ROWS$1;
  re[base + 0] = column.x;
  re[base + 1] = column.y;
  re[base + 2] = column.z;
  return result;
}
function mat3SetRow3(m, rowIndex, row, result = new Mat3()) {
  const re = result.set(m.elements).elements;
  re[rowIndex + NUM_COLUMNS$1 * 0] = row.x;
  re[rowIndex + NUM_COLUMNS$1 * 1] = row.y;
  re[rowIndex + NUM_COLUMNS$1 * 2] = row.z;
  return result;
}
function column3ToMat3(a, b, c, result = new Mat3()) {
  const re = result.elements;
  const columns = [a, b, c];
  for (let _c = 0; _c < columns.length; _c++) {
    const base = _c * NUM_ROWS$1;
    const column = columns[_c];
    re[base + 0] = column.x;
    re[base + 1] = column.y;
    re[base + 2] = column.z;
  }
  return result;
}
function mat3Equals(a, b, tolerance = EPSILON) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    if (!equalsTolerance(a.elements[i], b.elements[i], tolerance)) return false;
  }
  return true;
}
function mat3Add(a, b, result = new Mat3()) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = a.elements[i] + b.elements[i];
  }
  return result;
}
function mat3Subtract(a, b, result = new Mat3()) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = a.elements[i] - b.elements[i];
  }
  return result;
}
function mat3MultiplyByScalar(a, b, result = new Mat3()) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = a.elements[i] * b;
  }
  return result;
}
function mat3Negate(a, result = new Mat3()) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = -a.elements[i];
  }
  return result;
}
function mat3Multiply(a, b, result = new Mat3()) {
  const ae = a.elements;
  const be = b.elements;
  const te = result.elements;
  const a11 = ae[0],
    a12 = ae[3],
    a13 = ae[6];
  const a21 = ae[1],
    a22 = ae[4],
    a23 = ae[7];
  const a31 = ae[2],
    a32 = ae[5],
    a33 = ae[8];
  const b11 = be[0],
    b12 = be[3],
    b13 = be[6];
  const b21 = be[1],
    b22 = be[4],
    b23 = be[7];
  const b31 = be[2],
    b32 = be[5],
    b33 = be[8];
  te[0] = a11 * b11 + a12 * b21 + a13 * b31;
  te[3] = a11 * b12 + a12 * b22 + a13 * b32;
  te[6] = a11 * b13 + a12 * b23 + a13 * b33;
  te[1] = a21 * b11 + a22 * b21 + a23 * b31;
  te[4] = a21 * b12 + a22 * b22 + a23 * b32;
  te[7] = a21 * b13 + a22 * b23 + a23 * b33;
  te[2] = a31 * b11 + a32 * b21 + a33 * b31;
  te[5] = a31 * b12 + a32 * b22 + a33 * b32;
  te[8] = a31 * b13 + a32 * b23 + a33 * b33;
  return result;
}
function mat3Determinant(m) {
  const me = m.elements;
  const a = me[0],
    b = me[1],
    c = me[2],
    d = me[3],
    e = me[4],
    f = me[5],
    g = me[6],
    h = me[7],
    i = me[8];
  return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
}
function mat3Transpose(m, result = new Mat3()) {
  const me = m.elements;
  const te = result.elements;
  te[0] = me[0];
  te[4] = me[4];
  te[8] = me[8];
  te[1] = me[3];
  te[3] = me[1];
  te[2] = me[6];
  te[6] = me[2];
  te[5] = me[7];
  te[7] = me[5];
  return result;
}
function mat3Inverse(m, result = new Mat3()) {
  const e = m.elements;
  const n11 = e[0],
    n21 = e[1],
    n31 = e[2],
    n12 = e[3],
    n22 = e[4],
    n32 = e[5],
    n13 = e[6],
    n23 = e[7],
    n33 = e[8],
    t11 = n33 * n22 - n32 * n23,
    t12 = n32 * n13 - n33 * n12,
    t13 = n23 * n12 - n22 * n13,
    det = n11 * t11 + n21 * t12 + n31 * t13;
  if (det === 0) {
    throw new Error('can not invert degenerate matrix');
  }
  const detInv = 1 / det;
  const re = result.elements;

  // TODO: replace with a set
  re[0] = t11 * detInv;
  re[1] = (n31 * n23 - n33 * n21) * detInv;
  re[2] = (n32 * n21 - n31 * n22) * detInv;
  re[3] = t12 * detInv;
  re[4] = (n33 * n11 - n31 * n13) * detInv;
  re[5] = (n31 * n12 - n32 * n11) * detInv;
  re[6] = t13 * detInv;
  re[7] = (n21 * n13 - n23 * n11) * detInv;
  re[8] = (n22 * n11 - n21 * n12) * detInv;
  return result;
}
function mat3Mix(a, b, t, result = new Mat3()) {
  const s = 1 - t;
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = a.elements[i] * s + b.elements[i] * t;
  }
  return result;
}
function mat3FromArray(array, offset = 0, result = new Mat3()) {
  for (let i = 0; i < NUM_ELEMENTS$1; i++) {
    result.elements[i] = array[offset + i];
  }
  return result;
}
function mat3Parse(text, result = new Mat3()) {
  return mat3FromArray(parseSafeFloats(text), 0, result);
}
function eulerToMat3(euler, result = new Mat3()) {
  const te = result.elements;
  const x = euler.x,
    y = euler.y,
    z = euler.z;
  const a = Math.cos(x),
    b = Math.sin(x);
  const c = Math.cos(y),
    d = Math.sin(y);
  const e = Math.cos(z),
    f = Math.sin(z);
  const ae = a * e,
    af = a * f,
    be = b * e,
    bf = b * f;
  te[0] = c * e;
  te[3] = -c * f;
  te[6] = d;
  te[1] = af + be * d;
  te[4] = ae - bf * d;
  te[7] = -b * c;
  te[2] = bf - ae * d;
  te[5] = be + af * d;
  te[8] = a * c;
  return result;
}
function quatToMat3(q, result = new Mat3()) {
  const x = q.x,
    y = q.y,
    z = q.z,
    w = q.w;
  const x2 = x + x,
    y2 = y + y,
    z2 = z + z;
  const xx = x * x2,
    xy = x * y2,
    xz = x * z2;
  const yy = y * y2,
    yz = y * z2,
    zz = z * z2;
  const wx = w * x2,
    wy = w * y2,
    wz = w * z2;
  return result.set([1 - (yy + zz), xy - wz, xz + wy, xy + wz, 1 - (xx + zz), yz - wx, xz - wy, yz + wx, 1 - (xx + yy)]);
}
function scale2ToMat3(s, result = new Mat3()) {
  return result.set([s.x, 0, 0, 0, s.y, 0, 0, 0, 1]);
}
// from gl-matrix
function mat3ToScale2(m, result = new Vec2()) {
  const mat = m.elements;
  const m11 = mat[0];
  const m12 = mat[1];
  const m21 = mat[3];
  const m22 = mat[4];
  return result.set(Math.sqrt(m11 * m11 + m12 * m12), Math.sqrt(m21 * m21 + m22 * m22));
}
function translation2ToMat3(t, result = new Mat3()) {
  return result.set([1, 0, t.x, 0, 1, t.y, 0, 0, 1]);
}
function mat3ToTranslation2(m, result = new Vec2()) {
  return result.set(m.elements[2], m.elements[5]);
}
function mat4ToMat3(a, result = new Mat3()) {
  const ae = a.elements;
  return result.set([ae[0], ae[1], ae[2], ae[4], ae[5], ae[6], ae[8], ae[9], ae[10]]);
}

class Vec3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  clone(result = new Vec3()) {
    return result.set(this.x, this.y, this.z);
  }
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
}
function vec3Equals(a, b, tolerance = EPSILON) {
  return equalsTolerance(a.x, b.x, tolerance) && equalsTolerance(a.y, b.y, tolerance) && equalsTolerance(a.z, b.z, tolerance);
}
function vec3Add(a, b, result = new Vec3()) {
  return result.set(a.x + b.x, a.y + b.y, a.z + b.z);
}
function vec3Subtract(a, b, result = new Vec3()) {
  return result.set(a.x - b.x, a.y - b.y, a.z - b.z);
}
function vec3MultiplyByScalar(a, b, result = new Vec3()) {
  return result.set(a.x * b, a.y * b, a.z * b);
}
function vec3Negate(a, result = new Vec3()) {
  return result.set(-a.x, -a.y, -a.z);
}
function vec3Length(a) {
  return Math.sqrt(vec3Dot(a, a));
}
function vec3Normalize(a, result = new Vec3()) {
  const invLength = 1 / vec3Length(a);
  return vec3MultiplyByScalar(a, invLength, result);
}
function vec3Dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}
function vec3Cross(a, b, result = new Vec3()) {
  const ax = a.x;
  const ay = a.y;
  const az = a.z;
  const bx = b.x;
  const by = b.y;
  const bz = b.z;
  return result.set(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
}
function vec3Mix(a, b, t, result = new Vec3()) {
  const s = 1 - t;
  return result.set(a.x * s + b.x * t, a.y * s + b.y * t, a.z * s + b.z * t);
}
function vec3FromArray(array, offset = 0, result = new Vec3()) {
  return result.set(array[offset + 0], array[offset + 1], array[offset + 2]);
}
function vec3ToArray(a, array, offset = 0) {
  array[offset + 0] = a.x;
  array[offset + 1] = a.y;
  array[offset + 2] = a.z;
}
function vec3ToString(a) {
  return toSafeString([a.x, a.y, a.z]);
}
function vec3Parse(text, result = new Vec3()) {
  return vec3FromArray(parseSafeFloats(text), 0, result);
}
function hslToRGB(hsl, result = new Vec3()) {
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * 6 * (2 / 3 - t);
    }
    return p;
  }

  // h,s,l ranges are in 0.0 - 1.0
  const h = (hsl.x % 1 + 1) % 1; // euclidean modulo
  const s = Math.min(Math.max(hsl.y, 0), 1);
  const l = Math.min(Math.max(hsl.z, 0), 1);
  if (s === 0) {
    return result.set(1, 1, 1);
  }
  const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
  const q = 2 * l - p;
  return result.set(hue2rgb(q, p, h + 1 / 3), hue2rgb(q, p, h), hue2rgb(q, p, h - 1 / 3));
}
function rgbToHSL(rgb, result = new Vec3()) {
  // h,s,l ranges are in 0.0 - 1.0
  const r = rgb.x,
    g = rgb.y,
    b = rgb.z;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue = 0;
  let saturation = 0;
  const lightness = (min + max) / 2;
  if (min === max) {
    hue = 0;
    saturation = 0;
  } else {
    const delta = max - min;
    saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
    switch (max) {
      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / delta + 2;
        break;
      case b:
        hue = (r - g) / delta + 4;
        break;
    }
    hue /= 6;
  }
  return result.set(hue, saturation, lightness);
}
function hexToRGB(hex, result = new Vec3()) {
  hex = Math.floor(hex);
  return result.set((hex >> 16 & 255) / 255, (hex >> 8 & 255) / 255, (hex & 255) / 255);
}
function rgbToHex(rgb) {
  return rgb.x * 255 << 16 ^ rgb.y * 255 << 8 ^ rgb.z * 255 << 0;
}

// from three.js
function mat3ToEuler(m, result = new Vec3()) {
  // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  const te = m.elements;
  const m11 = te[0],
    m12 = te[3],
    m13 = te[6];
  te[1];
    const m22 = te[4],
    m23 = te[7];
  te[2];
    const m32 = te[5],
    m33 = te[8];
  result.y = Math.asin(clamp(m13, -1, 1));
  if (Math.abs(m13) < 0.9999999) {
    result.x = Math.atan2(-m23, m33);
    result.z = Math.atan2(-m12, m11);
  } else {
    result.x = Math.atan2(m32, m22);
    result.z = 0;
  }
  return result;
}

// from three.js
function mat4ToEuler(m, result = new Vec3()) {
  return mat3ToEuler(mat4ToMat3(m), result);
}
function quatToEuler(q, result = new Vec3()) {
  return mat3ToEuler(quatToMat3(q), result);
}

const ColorValue = new ValueType('color', () => new Vec3(), value => typeof value === 'string' ? vec3Parse(value) : new Vec3(value[0], value[1], value[2]), value => [value.x, value.y, value.z], (start, end, t) => vec3Mix(start, end, t));

const EulerValue = new ValueType('euler', () => new Vec3(), value => typeof value === 'string' ? vec3Parse(value) : new Vec3(value[0], value[1], value[2]), value => [value.x, value.y, value.z], (start, end, t) => vec3Mix(start, end, t));

class Vec4 {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  clone(result = new Vec4()) {
    return result.set(this.x, this.y, this.z, this.w);
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
}
function vec4Equals(a, b, tolerance = EPSILON) {
  return equalsTolerance(a.x, b.x, tolerance) && equalsTolerance(a.y, b.y, tolerance) && equalsTolerance(a.z, b.z, tolerance) && equalsTolerance(a.w, b.w, tolerance);
}
function vec4Add(a, b, result = new Vec4()) {
  return result.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
}
function vec4Subtract(a, b, result = new Vec4()) {
  return result.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}
function vec4MultiplyByScalar(a, b, result = new Vec4()) {
  return result.set(a.x * b, a.y * b, a.z * b, a.w * b);
}
function vec4Negate(a, result = new Vec4()) {
  return result.set(-a.x, -a.y, -a.z, -a.w);
}
function vec4Length(a) {
  return Math.sqrt(vec4Dot(a, a));
}
function vec4Normalize(a, result = new Vec4()) {
  const invLength = 1 / vec4Length(a);
  return vec4MultiplyByScalar(a, invLength, result);
}
function vec4Dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}
function vec4Mix(a, b, t, result = new Vec4()) {
  const s = 1 - t;
  return result.set(a.x * s + b.x * t, a.y * s + b.y * t, a.z * s + b.z * t, a.w * s + b.w * t);
}
function vec4FromArray(array, offset = 0, result = new Vec4()) {
  return result.set(array[offset + 0], array[offset + 1], array[offset + 2], array[offset + 3]);
}
function vec4ToArray(a, array, offset = 0) {
  array[offset + 0] = a.x;
  array[offset + 1] = a.y;
  array[offset + 2] = a.z;
  array[offset + 3] = a.w;
}
function vec4ToString(a) {
  return toSafeString([a.x, a.y, a.z, a.w]);
}
function vec4Parse(text, result = new Vec4()) {
  return vec4FromArray(parseSafeFloats(text), 0, result);
}
function quatConjugate(a, result = new Vec4()) {
  return result.set(-a.x, -a.y, -a.z, a.w);
}
function quatMultiply(a, b, result = new Vec4()) {
  // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

  const qax = a.x;
  const qay = a.y;
  const qaz = a.z;
  const qaw = a.w;
  const qbx = b.x;
  const qby = b.y;
  const qbz = b.z;
  const qbw = b.w;
  return result.set(qax * qbw + qaw * qbx + qay * qbz - qaz * qby, qay * qbw + qaw * qby + qaz * qbx - qax * qbz, qaz * qbw + qaw * qbz + qax * qby - qay * qbx, qaw * qbw - qax * qbx - qay * qby - qaz * qbz);
}
function quatSlerp(a, b, t, result = new Vec4()) {
  if (t <= 0) return a.clone(result);
  if (t >= 1) return b.clone(result);

  // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

  let cosHalfTheta = vec4Dot(a, b);
  if (cosHalfTheta < 0) {
    vec4Negate(b, result);
    cosHalfTheta = -cosHalfTheta;
  } else {
    b.clone(result);
  }
  if (cosHalfTheta >= 1) {
    return result;
  }
  const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
  if (sqrSinHalfTheta <= Number.EPSILON) {
    vec4Mix(a, result, t);
    vec4Normalize(result, result);
    return result;
  }
  const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
  const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
  const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
  const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
  result.w = a.w * ratioA + result.w * ratioB;
  result.x = a.x * ratioA + result.x * ratioB;
  result.y = a.y * ratioA + result.y * ratioB;
  result.z = a.z * ratioA + result.z * ratioB;
  return result;
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
function quatExp(a, result = new Vec4()) {
  const x = a.x,
    y = a.y,
    z = a.z,
    w = a.w;
  const r = Math.sqrt(x * x + y * y + z * z);
  const et = Math.exp(w);
  const s = r > 0 ? et * Math.sin(r) / r : 0;
  return result.set(x * s, y * s, z * s, et * Math.cos(r));
}

// from gl-matrix
function quatLn(a, result = new Vec4()) {
  const x = a.x,
    y = a.y,
    z = a.z,
    w = a.w;
  const r = Math.sqrt(x * x + y * y + z * z);
  const t = r > 0 ? Math.atan2(r, w) / r : 0;
  return result.set(x * t, y * t, z * t, 0.5 * Math.log(x * x + y * y + z * z + w * w));
}

// from gl-matrix
function quatPow(a, b, result = new Vec4()) {
  const ln = quatLn(a);
  const lnScaled = vec4MultiplyByScalar(ln, b);
  quatExp(lnScaled, result);
  return result;
}
function eulerToQuat(euler, result = new Vec4()) {
  // eslint-disable-next-line max-len
  // http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m

  const c1 = Math.cos(euler.x / 2);
  const c2 = Math.cos(euler.y / 2);
  const c3 = Math.cos(euler.z / 2);
  const s1 = Math.sin(euler.x / 2);
  const s2 = Math.sin(euler.y / 2);
  const s3 = Math.sin(euler.z / 2);

  // XYZ order only
  return result.set(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3);
}
function angleAxisToQuat(angle, axis, result = new Vec4()) {
  // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

  // assumes axis is normalized

  const halfAngle = angle / 2;
  const s = Math.sin(halfAngle);
  return result.set(axis.x * s, axis.y * s, axis.z * s, Math.cos(halfAngle));
}

// from gl-matrix
function quatToAngleAxis(q, result = new Vec3()) {
  const rad = Math.acos(q.w) * 2;
  const s = Math.sin(rad / 2);
  if (s > EPSILON) {
    result.x = q.x / s;
    result.y = q.y / s;
    result.z = q.z / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    result.x = 1;
    result.y = 0;
    result.z = 0;
  }
  return [rad, result];
}
function mat4ToQuat(m, result = new Vec4()) {
  return mat3ToQuat(mat4ToMat3(m), result);
}
function mat3ToQuat(m, result = new Vec4()) {
  // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

  // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

  // TODO, allocate x, y, z, w and only set q.* at the end.

  const te = m.elements,
    m11 = te[0],
    m12 = te[3],
    m13 = te[6],
    m21 = te[1],
    m22 = te[4],
    m23 = te[7],
    m31 = te[2],
    m32 = te[5],
    m33 = te[8],
    trace = m11 + m22 + m33;
  if (trace > 0) {
    const _s = 0.5 / Math.sqrt(trace + 1);
    return result.set((m32 - m23) * _s, (m13 - m31) * _s, (m21 - m12) * _s, 0.25 / _s);
  }
  if (m11 > m22 && m11 > m33) {
    const _s2 = 2 * Math.sqrt(1 + m11 - m22 - m33);
    return result.set(0.25 * _s2, (m12 + m21) / _s2, (m13 + m31) / _s2, (m32 - m23) / _s2);
  }
  if (m22 > m33) {
    const _s3 = 2 * Math.sqrt(1 + m22 - m11 - m33);
    return result.set((m12 + m21) / _s3, 0.25 * _s3, (m23 + m32) / _s3, (m13 - m31) / _s3);
  }
  const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
  return result.set((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
}

const QuatValue = new ValueType('quat', () => new Vec4(), value => typeof value === 'string' ? vec4Parse(value) : new Vec4(value[0], value[1], value[2], value[3]), value => [value.x, value.y, value.z, value.w], (start, end, t) => quatSlerp(start, end, t));

const Vec2Value = new ValueType('vec2', () => new Vec2(), value => typeof value === 'string' ? vec2Parse(value) : new Vec2(value[0], value[1]), value => [value.x, value.y], (start, end, t) => vec2Mix(start, end, t));

const Vec3Value = new ValueType('vec3', () => new Vec3(), value => typeof value === 'string' ? vec3Parse(value) : new Vec3(value[0], value[1], value[2]), value => [value.x, value.y, value.z], (start, end, t) => vec3Mix(start, end, t));

const Vec4Value = new ValueType('vec4', () => new Vec4(), value => typeof value === 'string' ? vec4Parse(value) : new Vec4(value[0], value[1], value[2], value[3]), value => [value.x, value.y, value.z, value.w], (start, end, t) => vec4Mix(start, end, t));

class DummyScene {
  constructor() {
    _defineProperty(this, "onSceneChanged", new EventEmitter());
    _defineProperty(this, "valueRegistry", new ValueTypeRegistry());
    const values = this.valueRegistry;
    // pull in value type nodes
    values.register(BooleanValue);
    values.register(StringValue);
    values.register(IntegerValue);
    values.register(FloatValue);
    values.register(Vec2Value);
    values.register(Vec3Value);
    values.register(Vec4Value);
    values.register(ColorValue);
    values.register(EulerValue);
    values.register(QuatValue);
  }
  getProperty(jsonPath, valueTypeName) {
    return this.valueRegistry.get(valueTypeName).creator();
  }
  setProperty() {
    this.onSceneChanged.emit();
  }
  addOnClickedListener(jsonPath, callback) {
    throw new Error('Method not implemented.');
  }
}

class SetSceneProperty extends FlowNode {
  static GetDescriptions(scene, ...valueTypeNames) {
    return valueTypeNames.map(valueTypeName => new NodeDescription(`scene/set/${valueTypeName}`, 'Action', `Set Scene ${toCamelCase(valueTypeName)}`, (description, graph) => new SetSceneProperty(description, graph, valueTypeName, scene)));
  }
  constructor(description, graph, valueTypeName, scene) {
    super(description, graph, [new Socket('flow', 'flow'), new Socket('string', 'jsonPath'), new Socket(valueTypeName, 'value')], [new Socket('flow', 'flow')]);
    this.valueTypeName = valueTypeName;
    this.scene = scene;
  }
  triggered(fiber, triggeringSocketName) {
    const scene = this.scene;
    const value = this.readInput('value');
    scene.setProperty(this.readInput('jsonPath'), this.valueTypeName, value);
    fiber.commit(this, 'flow');
  }
}

var _class;

// very 3D specific.
class OnSceneNodeClick extends EventNode {
  constructor(description, graph) {
    super(description, graph, [], [new Socket('flow', 'flow'), new Socket('float', 'nodeIndex')]);
  }
}
_class = OnSceneNodeClick;
_defineProperty(OnSceneNodeClick, "Description", new NodeDescription('scene/nodeClick', 'Event', 'On Node Click', (description, graph) => new _class(description, graph)));

class VecElements extends ImmediateNode {
  constructor(description, graph, valueTypeName, elementNames = ['x', 'y', 'z', 'w'], toArray) {
    super(description, graph, [new Socket(valueTypeName, 'value')], elementNames.map(elementName => new Socket('float', elementName)), () => {
      const value = this.readInput('value');
      const elementValues = elementNames.map(() => 0);
      toArray(value, elementValues, 0);
      elementNames.forEach((elementName, index) => this.writeOutput(elementName, elementValues[index]));
    });
  }
}

class GetSceneProperty extends ImmediateNode {
  static GetDescriptions(scene, ...valueTypeNames) {
    return valueTypeNames.map(valueTypeName => new NodeDescription(`scene/get/${valueTypeName}`, 'Query', `Get Scene ${toCamelCase(valueTypeName)}`, (description, graph) => new GetSceneProperty(description, graph, valueTypeName, scene)));
  }
  constructor(description, graph, valueTypeName, scene) {
    super(description, graph, [new Socket('string', 'jsonPath')], [new Socket(valueTypeName, 'value')], () => {
      this.writeOutput('value', this.scene.getProperty(this.readInput('jsonPath'), valueTypeName));
    });
    this.valueTypeName = valueTypeName;
    this.scene = scene;
  }
}

const Constant$7 = new NodeDescription('math/color', 'Logic', 'Color', (description, graph) => new In1Out1FuncNode(description, graph, ['color'], 'color', a => a));
const Create$5 = new NodeDescription('math/toColor/rgb', 'Logic', 'RGB To Color', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'color', (r, g, b) => new Vec3(r, g, b), ['r', 'g', 'b']));
const Elements$7 = new NodeDescription('math/toRgb/color', 'Logic', 'Color to RGB', (description, graph) => new VecElements(description, graph, 'color', ['r', 'g', 'b'], vec3ToArray));
const Add$6 = new NodeDescription('math/add/color', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['color', 'color'], 'color', vec3Add));
const Subtract$6 = new NodeDescription('math/subtract/color', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['color', 'color'], 'color', vec3Subtract));
const Negate$7 = new NodeDescription('math/negate/color', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['color'], 'color', vec3Negate));
const Scale$7 = new NodeDescription('math/scale/color', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['color', 'float'], 'color', vec3MultiplyByScalar));
const Mix$6 = new NodeDescription('math/mix/color', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['color', 'color', 'float'], 'color', vec3Mix, ['a', 'b', 't']));
const HslToColor = new NodeDescription('math/ToColor/hsl', 'Logic', 'HSL to Color', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'color', hslToRGB));
const ColorToHsl = new NodeDescription('math/toHsl/color', 'Logic', 'Color to HSL', (description, graph) => new In1Out1FuncNode(description, graph, ['color'], 'vec3', rgbToHSL));
const HexToColor = new NodeDescription('math/toColor/hex', 'Logic', 'HEX to Color', (description, graph) => new In1Out1FuncNode(description, graph, ['float'], 'color', hexToRGB));
const ColorToHex = new NodeDescription('math/toHex/color', 'Logic', 'Color to HEX', (description, graph) => new In1Out1FuncNode(description, graph, ['color'], 'float', rgbToHex));
const Equal$7 = new NodeDescription('math/equal/color', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['color', 'color', 'float'], 'boolean', vec3Equals, ['a', 'b', 'tolerance']));

var ColorNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$7,
  Create: Create$5,
  Elements: Elements$7,
  Add: Add$6,
  Subtract: Subtract$6,
  Negate: Negate$7,
  Scale: Scale$7,
  Mix: Mix$6,
  HslToColor: HslToColor,
  ColorToHsl: ColorToHsl,
  HexToColor: HexToColor,
  ColorToHex: ColorToHex,
  Equal: Equal$7
});

const Constant$6 = new NodeDescription('math/euler', 'Logic', 'Euler', (description, graph) => new In1Out1FuncNode(description, graph, ['euler'], 'euler', a => a));
const Create$4 = new NodeDescription('math/toEuler/float', 'Logic', 'Float to Euler', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'euler', (x, y, z) => new Vec3(x, y, z), ['x', 'y', 'z']));
const Elements$6 = new NodeDescription('math/toFloat/euler', 'Logic', 'Euler to Float', (description, graph) => new VecElements(description, graph, 'euler', ['x', 'y', 'z'], vec3ToArray));
const Add$5 = new NodeDescription('math/add/euler', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['euler', 'euler'], 'euler', vec3Add));
const Subtract$5 = new NodeDescription('math/subtract/euler', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['euler', 'euler'], 'euler', vec3Subtract));
const Negate$6 = new NodeDescription('math/negate/euler', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['euler'], 'euler', vec3Negate));
const Scale$6 = new NodeDescription('math/scale/euler', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['euler', 'float'], 'euler', vec3MultiplyByScalar));
const Mix$5 = new NodeDescription('math/mix/euler', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['euler', 'euler', 'float'], 'euler', vec3Mix, ['a', 'b', 't']));
const Mat3ToEuler = new NodeDescription('math/toEuler/mat3', 'Logic', 'To Euler', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'euler', mat3ToEuler));
const Mat4ToEuler = new NodeDescription('math/toEuler/mat4', 'Logic', 'To Euler', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'euler', mat4ToEuler));
const QuatToEuler = new NodeDescription('math/toEuler/quat', 'Logic', 'To Euler', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'euler', quatToEuler));
const Equal$6 = new NodeDescription('math/equal/euler', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['euler', 'euler', 'float'], 'boolean', vec3Equals, ['a', 'b', 'tolerance']));

var EulerNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$6,
  Create: Create$4,
  Elements: Elements$6,
  Add: Add$5,
  Subtract: Subtract$5,
  Negate: Negate$6,
  Scale: Scale$6,
  Mix: Mix$5,
  Mat3ToEuler: Mat3ToEuler,
  Mat4ToEuler: Mat4ToEuler,
  QuatToEuler: QuatToEuler,
  Equal: Equal$6
});

const Constant$5 = new NodeDescription('math/vec2', 'Logic', 'Vec2', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'vec2', a => a));
const Create$3 = new NodeDescription('math/toVec2/float', 'Logic', 'Float to Vec2', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'float'], 'vec2', (x, y) => new Vec2(x, y), ['x', 'y']));
const Elements$5 = new NodeDescription('math/toFloat/vec2', 'Logic', 'Vec2 To Float', (description, graph) => new VecElements(description, graph, 'vec2', ['x', 'y', 'z'], vec2ToArray));
const Add$4 = new NodeDescription('math/add/vec2', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['vec2', 'vec2'], 'vec2', vec2Add));
const Subtract$4 = new NodeDescription('math/subtract/vec2', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['vec2', 'vec2'], 'vec2', vec2Subtract));
const Negate$5 = new NodeDescription('math/negate/vec2', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'vec2', vec2Negate));
const Scale$5 = new NodeDescription('math/scale/vec2', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['vec2', 'float'], 'vec2', vec2MultiplyByScalar));
const Length$3 = new NodeDescription('math/length/vec2', 'Logic', 'Length', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'float', vec2Length));
const Normalize$3 = new NodeDescription('math/normalize/vec2', 'Logic', 'Normalize', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'vec2', vec2Normalize));
const Dot$3 = new NodeDescription('math/dot/vec2', 'Logic', 'Dot Product', (description, graph) => new In2Out1FuncNode(description, graph, ['vec2', 'vec2'], 'float', vec2Dot));
const Mix$4 = new NodeDescription('math/mix/vec2', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['vec2', 'vec2', 'float'], 'vec2', vec2Mix, ['a', 'b', 't']));
const Equal$5 = new NodeDescription('math/equal/vec2', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['vec2', 'vec2', 'float'], 'boolean', vec2Equals, ['a', 'b', 'tolerance']));

var Vec2Nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$5,
  Create: Create$3,
  Elements: Elements$5,
  Add: Add$4,
  Subtract: Subtract$4,
  Negate: Negate$5,
  Scale: Scale$5,
  Length: Length$3,
  Normalize: Normalize$3,
  Dot: Dot$3,
  Mix: Mix$4,
  Equal: Equal$5
});

const Constant$4 = new NodeDescription('math/vec3', 'Logic', 'Vec3', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'vec3', a => a));
const Create$2 = new NodeDescription('math/toVec3/float', 'Logic', 'Float to Vec3', (description, graph) => new In3Out1FuncNode(description, graph, ['float', 'float', 'float'], 'vec3', (x, y, z) => new Vec3(x, y, z), ['x', 'y', 'z']));
const Elements$4 = new NodeDescription('math/toFloat/vec3', 'Logic', 'Vec3 To Float', (description, graph) => new VecElements(description, graph, 'vec3', ['x', 'y', 'z'], vec3ToArray));
const Add$3 = new NodeDescription('math/add/vec3', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['vec3', 'vec3'], 'vec3', vec3Add));
const Subtract$3 = new NodeDescription('math/subtract/vec3', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['vec3', 'vec3'], 'vec3', vec3Subtract));
const Negate$4 = new NodeDescription('math/negate/vec3', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'vec3', vec3Negate));
const Scale$4 = new NodeDescription('math/scale/vec3', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['vec3', 'float'], 'vec3', vec3MultiplyByScalar));
const Length$2 = new NodeDescription('math/length/vec3', 'Logic', 'Length', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'float', vec3Length));
const Normalize$2 = new NodeDescription('math/normalize/vec3', 'Logic', 'Normalize', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'vec3', vec3Normalize));
const Cross = new NodeDescription('math/cross/vec3', 'Logic', 'Cross', (description, graph) => new In2Out1FuncNode(description, graph, ['vec3', 'vec3'], 'vec3', vec3Cross));
const Dot$2 = new NodeDescription('math/dot/vec3', 'Logic', 'Dot', (description, graph) => new In2Out1FuncNode(description, graph, ['vec3', 'vec3'], 'float', vec3Dot));
const Mix$3 = new NodeDescription('math/mix/vec3', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['vec3', 'vec3', 'float'], 'vec3', vec3Mix, ['a', 'b', 't']));
const Equal$4 = new NodeDescription('math/equal/vec3', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['vec3', 'vec3', 'float'], 'boolean', vec3Equals, ['a', 'b', 'tolerance']));

var Vec3Nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$4,
  Create: Create$2,
  Elements: Elements$4,
  Add: Add$3,
  Subtract: Subtract$3,
  Negate: Negate$4,
  Scale: Scale$4,
  Length: Length$2,
  Normalize: Normalize$2,
  Cross: Cross,
  Dot: Dot$2,
  Mix: Mix$3,
  Equal: Equal$4
});

const Constant$3 = new NodeDescription('math/vec4', 'Logic', 'Vec4', (description, graph) => new In1Out1FuncNode(description, graph, ['vec4'], 'vec4', a => a));
const Create$1 = new NodeDescription('math/toVec4/float', 'Logic', 'Float to Vec4', (description, graph) => new In4Out1FuncNode(description, graph, ['float', 'float', 'float', 'float'], 'vec4', (x, y, z, w) => new Vec4(x, y, z, w), ['x', 'y', 'z', 'w']));
const Elements$3 = new NodeDescription('math/toFloat/vec4', 'Logic', 'Vec4 to Float', (description, graph) => new VecElements(description, graph, 'vec4', ['x', 'y', 'z', 'w'], vec4ToArray));
const Add$2 = new NodeDescription('math/add/vec4', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['vec4', 'vec4'], 'vec4', vec4Add));
const Subtract$2 = new NodeDescription('math/subtract/vec4', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['vec4', 'vec4'], 'vec4', vec4Subtract));
const Negate$3 = new NodeDescription('math/negate/vec4', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['vec4'], 'vec4', vec4Negate));
const Scale$3 = new NodeDescription('math/scale/vec4', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['vec4', 'float'], 'vec4', vec4MultiplyByScalar));
const Length$1 = new NodeDescription('math/length/vec4', 'Logic', 'Length', (description, graph) => new In1Out1FuncNode(description, graph, ['vec4'], 'float', vec4Length));
const Normalize$1 = new NodeDescription('math/normalize/vec4', 'Logic', 'Normalize', (description, graph) => new In1Out1FuncNode(description, graph, ['vec4'], 'vec4', vec4Normalize));
const Dot$1 = new NodeDescription('math/dot/vec4', 'Logic', 'Dot Product', (description, graph) => new In2Out1FuncNode(description, graph, ['vec4', 'vec4'], 'float', vec4Dot));
const Mix$2 = new NodeDescription('math/mix/vec4', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['vec4', 'vec4', 'float'], 'vec4', vec4Mix, ['a', 'b', 't']));
const Equal$3 = new NodeDescription('math/equal/vec4', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['vec4', 'vec4', 'float'], 'boolean', vec4Equals, ['a', 'b', 'tolerance']));

var Vec4Nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$3,
  Create: Create$1,
  Elements: Elements$3,
  Add: Add$2,
  Subtract: Subtract$2,
  Negate: Negate$3,
  Scale: Scale$3,
  Length: Length$1,
  Normalize: Normalize$1,
  Dot: Dot$1,
  Mix: Mix$2,
  Equal: Equal$3
});

/*
- from Angle Axis
- from Euler
- to Angle Axis
- to Euler
- Conjugate
- Multiply
- Slerp
- Squad
- Scale
- 
*/

const Constant$2 = new NodeDescription('math/quat', 'Logic', 'Quaternion', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'quat', a => a));
const Create = new NodeDescription('math/toQuat/float', 'Logic', 'Float to Quat', (description, graph) => new In4Out1FuncNode(description, graph, ['float', 'float', 'float', 'float'], 'quat', (x, y, z, w) => new Vec4(x, y, z, w), ['x', 'y', 'z', 'w']));
const Elements$2 = new NodeDescription('math/toFloat/quat', 'Logic', 'Quat to Float', (description, graph) => new VecElements(description, graph, 'quat', ['x', 'y', 'z', 'w'], vec4ToArray));
const Negate$2 = new NodeDescription('math/conjugate/quat', 'Logic', 'Conjugate', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'quat', quatConjugate));
const Multiply$2 = new NodeDescription('math/multiply/quat', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['quat', 'quat'], 'quat', quatMultiply));
const Scale$2 = new NodeDescription('math/scale/quat', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['quat', 'float'], 'quat', vec4MultiplyByScalar));
const Length = new NodeDescription('math/length/quat', 'Logic', 'Length', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'float', vec4Length));
const Normalize = new NodeDescription('math/normalize/quat', 'Logic', 'Normalize', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'quat', vec4Normalize));
const Dot = new NodeDescription('math/dot/quat', 'Logic', 'Dot Product', (description, graph) => new In2Out1FuncNode(description, graph, ['quat', 'quat'], 'float', vec4Dot));
const Ln = new NodeDescription('math/ln/quat', 'Logic', 'Ln', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'quat', quatLn));
const Exp = new NodeDescription('math/exp/quat', 'Logic', 'Exp', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'quat', quatExp));
const Pow = new NodeDescription('math/pow/quat', 'Logic', 'Pow', (description, graph) => new In2Out1FuncNode(description, graph, ['quat', 'float'], 'quat', quatPow));
const Mat3ToQuat = new NodeDescription('math/toQuat/mat3', 'Logic', 'To Quat', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'quat', mat3ToQuat));
const Mat4ToQuat = new NodeDescription('math/toQuat/mat4', 'Logic', 'To Quat', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'quat', mat4ToQuat));
const EulerToQuat = new NodeDescription('math/toQuat/euler', 'Logic', '÷', (description, graph) => new In1Out1FuncNode(description, graph, ['euler'], 'quat', eulerToQuat));
const AngleAxisToQuat = new NodeDescription('math/toQuat/angleAxis', 'Logic', 'Angle Axis to Quat', (description, graph) => new In2Out1FuncNode(description, graph, ['float', 'vec3'], 'quat', angleAxisToQuat));
const Slerp = new NodeDescription('math/slerp/quat', 'Logic', 'Slerp', (description, graph) => new In3Out1FuncNode(description, graph, ['quat', 'quat', 'float'], 'quat', quatSlerp, ['a', 'b', 't']));
const Equal$2 = new NodeDescription('math/equal/quat', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['quat', 'quat', 'float'], 'boolean', vec4Equals, ['a', 'b', 'tolerance']));

var QuatNodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$2,
  Create: Create,
  Elements: Elements$2,
  Negate: Negate$2,
  Multiply: Multiply$2,
  Scale: Scale$2,
  Length: Length,
  Normalize: Normalize,
  Dot: Dot,
  Ln: Ln,
  Exp: Exp,
  Pow: Pow,
  Mat3ToQuat: Mat3ToQuat,
  Mat4ToQuat: Mat4ToQuat,
  EulerToQuat: EulerToQuat,
  AngleAxisToQuat: AngleAxisToQuat,
  Slerp: Slerp,
  Equal: Equal$2
});

const Constant$1 = new NodeDescription('math/mat3', 'Logic', 'Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'mat3', a => a));
const Column3ToMat3 = new NodeDescription('math/toMat3/column3', 'Logic', 'Columns to Mat3', (description, graph) => new In3Out1FuncNode(description, graph, ['vec3', 'vec3', 'vec3'], 'mat3', column3ToMat3));
const SetColumn$1 = new NodeDescription('math/setColumn/mat3', 'Logic', 'Set Column', (description, graph) => new In3Out1FuncNode(description, graph, ['mat3', 'integer', 'vec3'], 'mat3', mat3SetColumn3));
const SetRow$1 = new NodeDescription('math/setRow/mat3', 'Logic', 'Set Row', (description, graph) => new In3Out1FuncNode(description, graph, ['mat3', 'integer', 'vec3'], 'mat3', mat3SetRow3));
const Elements$1 = new NodeDescription('math/toVec3/mat3', 'Logic', 'Mat3 To Vec3', (description, graph) => new VecElements(description, graph, 'mat3', ['x', 'y', 'z'], () => {
  throw new Error('not implemented');
}));
const Add$1 = new NodeDescription('math/add/mat3', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['mat3', 'mat3'], 'mat3', mat3Add));
const Subtract$1 = new NodeDescription('math/subtract/mat3', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['mat3', 'mat3'], 'mat3', mat3Subtract));
const Negate$1 = new NodeDescription('math/negate/mat3', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'mat3', mat3Negate));
const Scale$1 = new NodeDescription('math/scale/mat3', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['mat3', 'float'], 'mat3', mat3MultiplyByScalar));
const Determinant$1 = new NodeDescription('math/determinant/mat3', 'Logic', 'Determinant', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'float', mat3Determinant));
const Inverse$1 = new NodeDescription('math/inverse/mat3', 'Logic', 'Inverse', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'mat3', mat3Inverse));
const Mat4ToMat3 = new NodeDescription('math/toMat3/mat4', 'Logic', 'Mat4 To Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat3', mat4ToMat3));
const Transpose$1 = new NodeDescription('math/transpose/mat3', 'Logic', 'Transpose', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'mat3', mat3Transpose));
const Multiply$1 = new NodeDescription('math/multiply/mat3', 'Logic', 'Cross', (description, graph) => new In2Out1FuncNode(description, graph, ['mat3', 'mat3'], 'mat3', mat3Multiply));
const Mix$1 = new NodeDescription('math/mix/mat3', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['mat3', 'mat3', 'float'], 'mat3', mat3Mix, ['a', 'b', 't']));
const Equal$1 = new NodeDescription('math/equal/mat3', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['mat3', 'mat3', 'float'], 'boolean', mat3Equals, ['a', 'b', 'tolerance']));
const EulerToMat3 = new NodeDescription('math/toMat3/euler', 'Logic', 'To Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['euler'], 'mat3', eulerToMat3));
const QuatToMat3 = new NodeDescription('math/toMat3/quat', 'Logic', 'To Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'mat3', eulerToMat3));
const Scale2ToMat3 = new NodeDescription('math/toMat3/scale2', 'Logic', 'Scale2 To Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'mat3', scale2ToMat3));
const Mat3ToScale2 = new NodeDescription('math/toScale2/mat3', 'Logic', 'Mat3 to Scale2', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'vec2', mat3ToScale2));
const Translation2ToMat3 = new NodeDescription('math/toMat3/translation2', 'Logic', 'Translation2 To Mat3', (description, graph) => new In1Out1FuncNode(description, graph, ['vec2'], 'mat3', translation2ToMat3));
const Mat3ToTranslation3 = new NodeDescription('math/toTranslation2/mat3', 'Logic', 'Mat3 to Translation2', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'vec2', mat3ToTranslation2));

var Mat3Nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant$1,
  Column3ToMat3: Column3ToMat3,
  SetColumn: SetColumn$1,
  SetRow: SetRow$1,
  Elements: Elements$1,
  Add: Add$1,
  Subtract: Subtract$1,
  Negate: Negate$1,
  Scale: Scale$1,
  Determinant: Determinant$1,
  Inverse: Inverse$1,
  Mat4ToMat3: Mat4ToMat3,
  Transpose: Transpose$1,
  Multiply: Multiply$1,
  Mix: Mix$1,
  Equal: Equal$1,
  EulerToMat3: EulerToMat3,
  QuatToMat3: QuatToMat3,
  Scale2ToMat3: Scale2ToMat3,
  Mat3ToScale2: Mat3ToScale2,
  Translation2ToMat3: Translation2ToMat3,
  Mat3ToTranslation3: Mat3ToTranslation3
});

const Mat3Value = new ValueType('mat3', () => new Mat3(), value => typeof value === 'string' ? mat3Parse(value) : new Mat3(value), value => value.elements, (start, end, t) => mat3Mix(start, end, t));

class In5Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = ['a', 'b', 'c', 'd', 'e']) {
    if (inputValueTypes.length !== 5) {
      throw new Error(`inputValueTypes of ${description.typeName}  must have a length of 5, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 5) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 5, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0]), new Socket(inputValueTypes[1], inputNames[1]), new Socket(inputValueTypes[2], inputNames[2]), new Socket(inputValueTypes[3], inputNames[3]), new Socket(inputValueTypes[4], inputNames[4])], [new Socket(outputValueType, 'result')], () => {
      this.writeOutput('result', this.evalFunc(this.readInput(inputNames[0]), this.readInput(inputNames[1]), this.readInput(inputNames[2]), this.readInput(inputNames[3]), this.readInput(inputNames[4])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

class In6Out1FuncNode extends ImmediateNode {
  constructor(description, graph, inputValueTypes, outputValueType, evalFunc, inputNames = ['a', 'b', 'c', 'd', 'e', 'f']) {
    if (inputValueTypes.length !== 6) {
      throw new Error(`inputValueTypes of ${description.typeName} must have a length of 6, it is instead ${inputValueTypes.length}`);
    }
    if (inputNames.length !== 6) {
      throw new Error(`inputNames of ${description.typeName}  must have a length of 6, it is instead ${inputNames.length}`);
    }
    super(description, graph, [new Socket(inputValueTypes[0], inputNames[0]), new Socket(inputValueTypes[1], inputNames[1]), new Socket(inputValueTypes[2], inputNames[2]), new Socket(inputValueTypes[3], inputNames[3]), new Socket(inputValueTypes[4], inputNames[4]), new Socket(inputValueTypes[5], inputNames[5])], [new Socket(outputValueType, 'result')], () => {
      this.writeOutput('result', this.evalFunc(this.readInput(inputNames[0]), this.readInput(inputNames[1]), this.readInput(inputNames[2]), this.readInput(inputNames[3]), this.readInput(inputNames[4]), this.readInput(inputNames[5])));
    });
    this.evalFunc = evalFunc;
    this.inputNames = inputNames;
  }
}

// uses OpenGL matrix layout where each column is specified subsequently in order from left to right.
// ( x, y, z, 1 ) x [ 0  4   8  12] = ( x', y', z', 1 )
//                  [ 1  5   9  13]
//                  [ 2  6  10  14]
//                  [ 3  7  11  15]
// where elements 3, 7, 11 would be translation in 3D, as they would multiplied
// by the last virtual element of the 3D vector.
const NUM_ROWS = 4;
const NUM_COLUMNS = 4;
const NUM_ELEMENTS = NUM_ROWS * NUM_COLUMNS;
class Mat4 {
  constructor(elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
    this.elements = elements;
    if (elements.length !== NUM_ELEMENTS) {
      throw new Error(`elements must have length ${NUM_ELEMENTS}, got ${elements.length}`);
    }
  }
  clone(result = new Mat4()) {
    return result.set(this.elements);
  }
  set(elements) {
    if (elements.length !== NUM_ELEMENTS) {
      throw new Error(`elements must have length ${NUM_ELEMENTS}, got ${elements.length}`);
    }
    for (let i = 0; i < NUM_ELEMENTS; i++) {
      this.elements[i] = elements[i];
    }
    return this;
  }
}
function mat4SetColumn4(m, columnIndex, column, result = new Mat4()) {
  const re = result.set(m.elements).elements;
  const base = Number(columnIndex) * NUM_ROWS;
  re[base + 0] = column.x;
  re[base + 1] = column.y;
  re[base + 2] = column.z;
  re[base + 3] = column.w;
  return result;
}
function mat4SetRow4(m, rowIndex, row, result = new Mat4()) {
  const re = result.set(m.elements).elements;
  const base = Number(rowIndex);
  re[base + NUM_COLUMNS * 0] = row.x;
  re[base + NUM_COLUMNS * 1] = row.y;
  re[base + NUM_COLUMNS * 2] = row.z;
  re[base + NUM_COLUMNS * 3] = row.w;
  return result;
}
function column4ToMat4(a, b, c, d, result = new Mat4()) {
  const re = result.elements;
  const columns = [a, b, c, d];
  for (let _c = 0; _c < columns.length; _c++) {
    const base = _c * NUM_ROWS;
    const column = columns[_c];
    re[base + 0] = column.x;
    re[base + 1] = column.y;
    re[base + 2] = column.z;
    re[base + 3] = column.w;
  }
  return result;
}
function mat4Equals(a, b, tolerance = EPSILON) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    if (!equalsTolerance(a.elements[i], b.elements[i], tolerance)) return false;
  }
  return true;
}
function mat4Add(a, b, result = new Mat4()) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = a.elements[i] + b.elements[i];
  }
  return result;
}
function mat4Subtract(a, b, result = new Mat4()) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = a.elements[i] - b.elements[i];
  }
  return result;
}
function mat4MultiplyByScalar(a, b, result = new Mat4()) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = a.elements[i] * b;
  }
  return result;
}
function mat4Negate(a, result = new Mat4()) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = -a.elements[i];
  }
  return result;
}
function mat4Multiply(a, b, result = new Mat4()) {
  const ae = a.elements;
  const be = b.elements;
  const te = result.elements;
  const a11 = ae[0],
    a12 = ae[4],
    a13 = ae[8],
    a14 = ae[12];
  const a21 = ae[1],
    a22 = ae[5],
    a23 = ae[9],
    a24 = ae[13];
  const a31 = ae[2],
    a32 = ae[6],
    a33 = ae[10],
    a34 = ae[14];
  const a41 = ae[3],
    a42 = ae[7],
    a43 = ae[11],
    a44 = ae[15];
  const b11 = be[0],
    b12 = be[4],
    b13 = be[8],
    b14 = be[12];
  const b21 = be[1],
    b22 = be[5],
    b23 = be[9],
    b24 = be[13];
  const b31 = be[2],
    b32 = be[6],
    b33 = be[10],
    b34 = be[14];
  const b41 = be[3],
    b42 = be[7],
    b43 = be[11],
    b44 = be[15];

  // TODO: Replace with set(...)
  te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
  te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
  te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
  te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
  te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
  te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
  te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
  te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
  te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
  te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
  te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
  te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
  te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
  te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
  te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
  te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
  return result;
}
function mat4Determinant(m) {
  // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
  const me = m.elements,
    n11 = me[0],
    n21 = me[1],
    n31 = me[2],
    n41 = me[3],
    n12 = me[4],
    n22 = me[5],
    n32 = me[6],
    n42 = me[7],
    n13 = me[8],
    n23 = me[9],
    n33 = me[10],
    n43 = me[11],
    n14 = me[12],
    n24 = me[13],
    n34 = me[14],
    n44 = me[15],
    t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
    t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
    t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
    t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
  return n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
}
function mat4Adjoint(m, result = new Mat4()) {
  // from gl-matrix
  const a = m.elements;
  const out = result.elements;
  const a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  const a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  const a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  const a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  const b00 = a00 * a11 - a01 * a10;
  const b01 = a00 * a12 - a02 * a10;
  const b02 = a00 * a13 - a03 * a10;
  const b03 = a01 * a12 - a02 * a11;
  const b04 = a01 * a13 - a03 * a11;
  const b05 = a02 * a13 - a03 * a12;
  const b06 = a20 * a31 - a21 * a30;
  const b07 = a20 * a32 - a22 * a30;
  const b08 = a20 * a33 - a23 * a30;
  const b09 = a21 * a32 - a22 * a31;
  const b10 = a21 * a33 - a23 * a31;
  const b11 = a22 * a33 - a23 * a32;
  out[0] = a11 * b11 - a12 * b10 + a13 * b09;
  out[1] = a02 * b10 - a01 * b11 - a03 * b09;
  out[2] = a31 * b05 - a32 * b04 + a33 * b03;
  out[3] = a22 * b04 - a21 * b05 - a23 * b03;
  out[4] = a12 * b08 - a10 * b11 - a13 * b07;
  out[5] = a00 * b11 - a02 * b08 + a03 * b07;
  out[6] = a32 * b02 - a30 * b05 - a33 * b01;
  out[7] = a20 * b05 - a22 * b02 + a23 * b01;
  out[8] = a10 * b10 - a11 * b08 + a13 * b06;
  out[9] = a01 * b08 - a00 * b10 - a03 * b06;
  out[10] = a30 * b04 - a31 * b02 + a33 * b00;
  out[11] = a21 * b02 - a20 * b04 - a23 * b00;
  out[12] = a11 * b07 - a10 * b09 - a12 * b06;
  out[13] = a00 * b09 - a01 * b07 + a02 * b06;
  out[14] = a31 * b01 - a30 * b03 - a32 * b00;
  out[15] = a20 * b03 - a21 * b01 + a22 * b00;
  return result;
}
function mat4Transpose(m, result = new Mat4()) {
  const re = m.clone(result).elements;
  let tmp;

  // TODO: replace this with just reading from me and setting re, no need for a temporary
  tmp = re[1];
  re[1] = re[4];
  re[4] = tmp;
  tmp = re[2];
  re[2] = re[8];
  re[8] = tmp;
  tmp = re[6];
  re[6] = re[9];
  re[9] = tmp;
  tmp = re[3];
  re[3] = re[12];
  re[12] = tmp;
  tmp = re[7];
  re[7] = re[13];
  re[13] = tmp;
  tmp = re[11];
  re[11] = re[14];
  re[14] = tmp;
  return result;
}
function mat4Inverse(m, result = new Mat4()) {
  // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
  const me = m.elements,
    n11 = me[0],
    n21 = me[1],
    n31 = me[2],
    n41 = me[3],
    n12 = me[4],
    n22 = me[5],
    n32 = me[6],
    n42 = me[7],
    n13 = me[8],
    n23 = me[9],
    n33 = me[10],
    n43 = me[11],
    n14 = me[12],
    n24 = me[13],
    n34 = me[14],
    n44 = me[15],
    t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
    t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
    t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
    t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
  const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
  if (det === 0) {
    throw new Error('can not invert degenerate matrix');
  }
  const detInv = 1 / det;

  // TODO: replace with a set
  const re = result.elements;
  re[0] = t11 * detInv;
  re[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
  re[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
  re[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
  re[4] = t12 * detInv;
  re[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
  re[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
  re[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
  re[8] = t13 * detInv;
  re[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
  re[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
  re[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
  re[12] = t14 * detInv;
  re[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
  re[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
  re[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
  return result;
}
function mat4Mix(a, b, t, result = new Mat4()) {
  const s = 1 - t;
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = a.elements[i] * s + b.elements[i] * t;
  }
  return result;
}
function mat4FromArray(array, offset = 0, result = new Mat4()) {
  for (let i = 0; i < NUM_ELEMENTS; i++) {
    result.elements[i] = array[offset + i];
  }
  return result;
}
function mat4Parse(text, result = new Mat4()) {
  return mat4FromArray(parseSafeFloats(text), 0, result);
}
function mat3ToMat4(a, result = new Mat4()) {
  const ae = a.elements;
  return result.set([ae[0], ae[1], ae[2], 0, ae[3], ae[4], ae[5], 0, ae[6], ae[7], ae[8], 0, 0, 0, 0, 1]);
}
function eulerToMat4(e, result = new Mat4()) {
  return mat3ToMat4(eulerToMat3(e), result);
}
function quatToMat4(q, result = new Mat4()) {
  return mat3ToMat4(quatToMat3(q), result);
}
function scale3ToMat4(s, result = new Mat4()) {
  return result.set([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, s.z, 0, 0, 0, 0, 1]);
}
function translation3ToMat4(t, result = new Mat4()) {
  return result.set([1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1]);
}
function mat4Translate(m, t, result = new Mat4()) {
  return mat4Multiply(m, translation3ToMat4(t), result);
}
function mat4Scale(m, s, result = new Mat4()) {
  return mat4Multiply(m, scale3ToMat4(s), result);
}
function mat4RotateByQuat(m, q, result = new Mat4()) {
  return mat4Multiply(m, quatToMat4(q), result);
}
function mat4RotateByEuler(m, e, result = new Mat4()) {
  return mat4Multiply(m, eulerToMat4(e), result);
}
function mat4TransformPoint3(m, v, result = new Vec3()) {
  const x = v.x,
    y = v.y,
    z = v.z;
  const e = m.elements;
  const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
  result.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
  result.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
  result.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
  return result;
}
function mat4TransformNormal3(v, m, result = new Vec3()) {
  const x = v.x,
    y = v.y,
    z = v.z;
  const e = m.elements;
  result.x = e[0] * x + e[4] * y + e[8] * z;
  result.y = e[1] * x + e[5] * y + e[9] * z;
  result.z = e[2] * x + e[6] * y + e[10] * z;
  return vec3Normalize(result, result);
}
function mat4Perspective(left, right, top, bottom, near, far, result = new Mat4()) {
  const x = 2 * near / (right - left);
  const y = 2 * near / (top - bottom);
  const a = (right + left) / (right - left);
  const b = (top + bottom) / (top - bottom);
  const c = -(far + near) / (far - near);
  const d = -2 * far * near / (far - near);
  return result.set([x, 0, a, 0, 0, y, b, 0, 0, 0, c, d, 0, 0, -1, 0]);
}
function mat4PerspectiveFov(verticalFov, near, far, zoom, aspectRatio, result = new Mat4()) {
  const height = 2 * near * Math.tan(verticalFov * Math.PI / 180) / zoom;
  const width = height * aspectRatio;

  // NOTE: OpenGL screen coordinates are -bottomt to +top, -left to +right.

  const right = width * 0.5;
  const left = right - width;
  const top = height * 0.5;
  const bottom = top - height;
  return mat4Perspective(left, right, top, bottom, near, far, result);
}

// TODO: Replace with a Box3?
function mat4Orthogonal(left, right, top, bottom, near, far, result = new Mat4()) {
  const w = 1 / (right - left);
  const h = 1 / (top - bottom);
  const p = 1 / (far - near);
  const x = (right + left) * w;
  const y = (top + bottom) * h;
  const z = (far + near) * p;
  return result.set([2 * w, 0, 0, -x, 0, 2 * h, 0, -y, 0, 0, -2 * p, -z, 0, 0, 0, 1]);
}
function mat4OrthogonalSimple(height, center, near, far, zoom, aspectRatio = 1, result = new Mat4()) {
  height /= zoom;
  const width = height * aspectRatio;
  const left = -width * 0.5 + center.x;
  const right = left + width;
  const top = -height * 0.5 + center.y;
  const bottom = top + height;
  return mat4Orthogonal(left, right, top, bottom, near, far, result);
}
function mat4LookAt(eye, target, up, result = new Mat4()) {
  const te = result.elements;
  const look = vec3Subtract(eye, target);
  const lookLength = vec3Length(look);
  if (lookLength === 0) {
    look.z = 1;
  } else {
    vec3MultiplyByScalar(look, 1 / lookLength, look);
  }
  const right = vec3Cross(up, look);
  const rightLength = vec3Length(right);
  if (rightLength === 0) {
    // up and z are parallel

    if (Math.abs(up.z) === 1) {
      up.x += 0.0001;
    } else {
      up.z += 0.0001;
    }
    vec3Normalize(up, up);
    vec3Cross(right, up, right);
  } else {
    vec3MultiplyByScalar(right, 1 / rightLength, right);
  }
  const up2 = vec3Cross(look, right);
  te[0] = right.x;
  te[4] = up2.x;
  te[8] = look.x;
  te[1] = right.y;
  te[5] = up2.y;
  te[9] = look.y;
  te[2] = right.z;
  te[6] = up2.z;
  te[10] = look.z;
  return result;
}

const Constant = new NodeDescription('math/mat4', 'Logic', 'Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat4', a => a));
const Column4ToMat4 = new NodeDescription('math/toMat4/column4', 'Logic', 'Columns to Mat4', (description, graph) => new In4Out1FuncNode(description, graph, ['vec4', 'vec4', 'vec4', 'vec4'], 'mat4', column4ToMat4));
const SetColumn = new NodeDescription('math/setColumn/mat4', 'Logic', 'Set Column', (description, graph) => new In3Out1FuncNode(description, graph, ['mat4', 'integer', 'vec4'], 'mat4', mat4SetColumn4));
const SetRow = new NodeDescription('math/setRow/mat4', 'Logic', 'Set Row', (description, graph) => new In3Out1FuncNode(description, graph, ['mat4', 'integer', 'vec4'], 'mat4', mat4SetRow4));
const Elements = new NodeDescription('math/toVec4/mat4', 'Logic', 'Mat4 To Vec4', (description, graph) => new VecElements(description, graph, 'mat4', ['x', 'y', 'z', 'w'], () => {
  throw new Error('not implemented');
}));
const Add = new NodeDescription('math/add/mat4', 'Logic', '+', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'mat4'], 'mat4', mat4Add));
const Subtract = new NodeDescription('math/subtract/mat4', 'Logic', '-', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'mat4'], 'mat4', mat4Subtract));
const Negate = new NodeDescription('math/negate/mat4', 'Logic', '-', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat4', mat4Negate));
const MultiplyByScalar = new NodeDescription('math/multiplyByScalar/mat4', 'Logic', '×', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'float'], 'mat4', mat4MultiplyByScalar));
const Determinant = new NodeDescription('math/determinant/mat4', 'Logic', 'Determinant', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'float', mat4Determinant));
const Adjoint = new NodeDescription('math/adjoint/mat4', 'Logic', 'Adjoint', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat4', mat4Adjoint));
const Inverse = new NodeDescription('math/inverse/mat4', 'Logic', 'Inverse', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat4', mat4Inverse));
const Transpose = new NodeDescription('math/transpose/mat4', 'Logic', 'Transpose', (description, graph) => new In1Out1FuncNode(description, graph, ['mat4'], 'mat4', mat4Transpose));
const Mat3ToMat4 = new NodeDescription('math/toMat4/mat3', 'Logic', 'Mat3 To Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['mat3'], 'mat4', mat3ToMat4));
const Scale3ToMat4 = new NodeDescription('math/toMat4/scale3', 'Logic', 'Scale3 To Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'mat4', scale3ToMat4));
const Translate3ToMat4 = new NodeDescription('math/toMat4/translate3', 'Logic', 'Translate3 To Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['vec3'], 'mat4', translation3ToMat4));
const QuatToMat4 = new NodeDescription('math/toMat4/quat', 'Logic', 'Quat To Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['quat'], 'mat4', quatToMat4));
const EulerToMat4 = new NodeDescription('math/toMat4/euler', 'Logic', 'Euler To Mat4', (description, graph) => new In1Out1FuncNode(description, graph, ['euler'], 'mat4', eulerToMat4));
const Translate = new NodeDescription('math/translate/mat4', 'Logic', 'Translate', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'vec3'], 'mat4', mat4Translate));
const Scale = new NodeDescription('math/scale/mat4', 'Logic', 'Scale', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'vec3'], 'mat4', mat4Scale));
const RotateByQuat = new NodeDescription('math/rotateByQuat/mat4', 'Logic', 'Rotate', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'quat'], 'mat4', mat4RotateByQuat));
const RotateByEuler = new NodeDescription('math/rotateByEuler/mat4', 'Logic', 'Rotate', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'euler'], 'mat4', mat4RotateByEuler));
const Multiply = new NodeDescription('math/multiply/mat4', 'Logic', 'Cross', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'mat4'], 'mat4', mat4Multiply));
const Mix = new NodeDescription('math/mix/mat4', 'Logic', '÷', (description, graph) => new In3Out1FuncNode(description, graph, ['mat4', 'mat4', 'float'], 'mat4', mat4Mix, ['a', 'b', 't']));
const Equal = new NodeDescription('math/equal/mat4', 'Logic', '=', (description, graph) => new In3Out1FuncNode(description, graph, ['mat4', 'mat4', 'float'], 'boolean', mat4Equals, ['a', 'b', 'tolerance']));
const TransformPoint3 = new NodeDescription('math/transformPoint3/mat4', 'Logic', 'Transform Point3', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'vec3'], 'vec3', mat4TransformPoint3));
const TransformNormal3 = new NodeDescription('math/transformNormal3/mat4', 'Logic', 'Transform Normal', (description, graph) => new In2Out1FuncNode(description, graph, ['mat4', 'vec3'], 'vec3', mat4TransformNormal3));
const Perspective = new NodeDescription('math/perspective/mat4', 'Logic', 'Perspective', (description, graph) => new In6Out1FuncNode(description, graph, ['float', 'float', 'float', 'float', 'float', 'float'], 'mat4', mat4Perspective, ['left', 'right', 'top', 'bottom', 'near', 'far']));
const PerspectiveFov = new NodeDescription('math/perspectiveFov/mat4', 'Logic', 'Perspective FOV', (description, graph) => new In5Out1FuncNode(description, graph, ['float', 'float', 'float', 'float', 'float'], 'mat4', mat4PerspectiveFov, ['verticalFov', 'near', 'far', 'zoom', 'aspectRatio']));
const Orthographic = new NodeDescription('math/orthographic/mat4', 'Logic', 'Orthographic', (description, graph) => new In6Out1FuncNode(description, graph, ['float', 'float', 'float', 'float', 'float', 'float'], 'mat4', mat4Orthogonal, ['left', 'right', 'top', 'bottom', 'near', 'far']));
const OrthographicSimple = new NodeDescription('math/orthographicSimple/mat4', 'Logic', 'Orthographic Simple', (description, graph) => new In6Out1FuncNode(description, graph, ['float', 'vec2', 'float', 'float', 'float', 'float'], 'mat4', mat4OrthogonalSimple, ['height', 'center', 'near', 'far', 'zoom', 'aspectRatio']));
const LookAt = new NodeDescription('math/lookAt/mat4', 'Logic', 'Look At', (description, graph) => new In3Out1FuncNode(description, graph, ['vec3', 'vec3', 'vec3'], 'mat4', mat4LookAt, ['eye', 'target', 'up']));

var Mat4Nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Constant: Constant,
  Column4ToMat4: Column4ToMat4,
  SetColumn: SetColumn,
  SetRow: SetRow,
  Elements: Elements,
  Add: Add,
  Subtract: Subtract,
  Negate: Negate,
  MultiplyByScalar: MultiplyByScalar,
  Determinant: Determinant,
  Adjoint: Adjoint,
  Inverse: Inverse,
  Transpose: Transpose,
  Mat3ToMat4: Mat3ToMat4,
  Scale3ToMat4: Scale3ToMat4,
  Translate3ToMat4: Translate3ToMat4,
  QuatToMat4: QuatToMat4,
  EulerToMat4: EulerToMat4,
  Translate: Translate,
  Scale: Scale,
  RotateByQuat: RotateByQuat,
  RotateByEuler: RotateByEuler,
  Multiply: Multiply,
  Mix: Mix,
  Equal: Equal,
  TransformPoint3: TransformPoint3,
  TransformNormal3: TransformNormal3,
  Perspective: Perspective,
  PerspectiveFov: PerspectiveFov,
  Orthographic: Orthographic,
  OrthographicSimple: OrthographicSimple,
  LookAt: LookAt
});

const Mat4Value = new ValueType('mat4', () => new Mat4(), value => typeof value === 'string' ? mat4Parse(value) : new Mat4(value), value => value.elements, (start, end, t) => mat4Mix(start, end, t));

/* eslint-disable max-len */
function registerSceneProfile(registry, scene = new DummyScene()) {
  const {
    values,
    nodes
  } = registry;

  // pull in value type nodes
  values.register(Vec2Value);
  values.register(Vec3Value);
  values.register(Vec4Value);
  values.register(ColorValue);
  values.register(EulerValue);
  values.register(QuatValue);
  values.register(Mat3Value);
  values.register(Mat4Value);

  // pull in value type nodes
  nodes.register(...getNodeDescriptions(Vec2Nodes));
  nodes.register(...getNodeDescriptions(Vec3Nodes));
  nodes.register(...getNodeDescriptions(Vec4Nodes));
  nodes.register(...getNodeDescriptions(ColorNodes));
  nodes.register(...getNodeDescriptions(EulerNodes));
  nodes.register(...getNodeDescriptions(QuatNodes));
  nodes.register(...getNodeDescriptions(Mat3Nodes));
  nodes.register(...getNodeDescriptions(Mat4Nodes));

  // events

  nodes.register(OnSceneNodeClick.Description);

  // actions
  const allValueTypeNames = values.getAllNames();
  nodes.register(...SetSceneProperty.GetDescriptions(scene, ...allValueTypeNames));
  nodes.register(...GetSceneProperty.GetDescriptions(scene, ...allValueTypeNames));
  const newValueTypeNames = ['vec2', 'vec3', 'vec4', 'quat', 'euler', 'color', 'mat3', 'mat4'];

  // variables

  newValueTypeNames.forEach(valueTypeName => {
    registerSerializersForValueType(registry, valueTypeName);
  });
  return registry;
}

exports.Assert = Assert;
exports.AsyncNode = AsyncNode;
exports.AsyncNode2 = AsyncNode2;
exports.BooleanNodes = BooleanNodes;
exports.BooleanValue = BooleanValue;
exports.Branch = Branch;
exports.ColorNodes = ColorNodes;
exports.ColorValue = ColorValue;
exports.Counter = Counter;
exports.CustomEvent = CustomEvent;
exports.Debounce = Debounce;
exports.DefaultLogger = DefaultLogger;
exports.Delay = Delay;
exports.DoN = DoN;
exports.DoOnce = DoOnce;
exports.DummyScene = DummyScene;
exports.Engine = Engine;
exports.EulerNodes = EulerNodes;
exports.EulerValue = EulerValue;
exports.EventEmitter = EventEmitter;
exports.EventNode = EventNode;
exports.EventNode2 = EventNode2;
exports.ExpectTrue = ExpectTrue;
exports.Fiber = Fiber;
exports.FlipFlop = FlipFlop;
exports.FloatNodes = FloatNodes;
exports.FloatValue = FloatValue;
exports.FlowNode = FlowNode;
exports.FlowNode2 = FlowNode2;
exports.ForLoop = ForLoop;
exports.Gate = Gate;
exports.GetSceneProperty = GetSceneProperty;
exports.Graph = Graph;
exports.ImmediateNode = ImmediateNode;
exports.ImmediateNode2 = ImmediateNode2;
exports.In0Out1FuncNode = In0Out1FuncNode;
exports.In1Out1FuncNode = In1Out1FuncNode;
exports.In2Out1FuncNode = In2Out1FuncNode;
exports.In3Out1FuncNode = In3Out1FuncNode;
exports.In4Out1FuncNode = In4Out1FuncNode;
exports.IntegerNodes = IntegerNodes;
exports.IntegerValue = IntegerValue;
exports.LifecycleOnEnd = LifecycleOnEnd;
exports.LifecycleOnStart = LifecycleOnStart;
exports.LifecycleOnTick = LifecycleOnTick;
exports.Link = Link;
exports.Log = Log;
exports.Logger = Logger;
exports.ManualLifecycleEventEmitter = ManualLifecycleEventEmitter;
exports.MultiGate = MultiGate;
exports.Node = Node;
exports.NodeDescription = NodeDescription;
exports.NodeDescription2 = NodeDescription2;
exports.NodeTypeRegistry = NodeTypeRegistry;
exports.OnCustomEvent = OnCustomEvent;
exports.OnSceneNodeClick = OnSceneNodeClick;
exports.QuatNodes = QuatNodes;
exports.QuatValue = QuatValue;
exports.Registry = Registry;
exports.Sequence = Sequence;
exports.SetSceneProperty = SetSceneProperty;
exports.Socket = Socket;
exports.StringNodes = StringNodes;
exports.StringValue = StringValue;
exports.Throttle = Throttle;
exports.TriggerCustomEvent = TriggerCustomEvent;
exports.ValueType = ValueType;
exports.ValueTypeRegistry = ValueTypeRegistry;
exports.Variable = Variable;
exports.VariableGet = VariableGet;
exports.VariableSet = VariableSet;
exports.Vec2 = Vec2;
exports.Vec2Nodes = Vec2Nodes;
exports.Vec2Value = Vec2Value;
exports.Vec3 = Vec3;
exports.Vec3Nodes = Vec3Nodes;
exports.Vec3Value = Vec3Value;
exports.Vec4 = Vec4;
exports.Vec4Nodes = Vec4Nodes;
exports.Vec4Value = Vec4Value;
exports.VecElements = VecElements;
exports.WaitAll = WaitAll;
exports.angleAxisToQuat = angleAxisToQuat;
exports.eulerToQuat = eulerToQuat;
exports.getNodeDescriptions = getNodeDescriptions;
exports.hexToRGB = hexToRGB;
exports.hslToRGB = hslToRGB;
exports.mat3ToEuler = mat3ToEuler;
exports.mat3ToQuat = mat3ToQuat;
exports.mat4ToEuler = mat4ToEuler;
exports.mat4ToQuat = mat4ToQuat;
exports.parseSafeFloat = parseSafeFloat;
exports.parseSafeFloats = parseSafeFloats;
exports.quatConjugate = quatConjugate;
exports.quatExp = quatExp;
exports.quatLn = quatLn;
exports.quatMultiply = quatMultiply;
exports.quatPow = quatPow;
exports.quatSlerp = quatSlerp;
exports.quatToAngleAxis = quatToAngleAxis;
exports.quatToEuler = quatToEuler;
exports.readGraphFromJSON = readGraphFromJSON;
exports.registerCoreProfile = registerCoreProfile;
exports.registerSceneProfile = registerSceneProfile;
exports.rgbToHSL = rgbToHSL;
exports.rgbToHex = rgbToHex;
exports.toSafeString = toSafeString;
exports.validateGraph = validateGraph;
exports.validateGraphAcyclic = validateGraphAcyclic;
exports.validateGraphLinks = validateGraphLinks;
exports.validateNodeRegistry = validateNodeRegistry;
exports.validateRegistry = validateRegistry;
exports.validateValueRegistry = validateValueRegistry;
exports.vec2Add = vec2Add;
exports.vec2Dot = vec2Dot;
exports.vec2Equals = vec2Equals;
exports.vec2FromArray = vec2FromArray;
exports.vec2Length = vec2Length;
exports.vec2Mix = vec2Mix;
exports.vec2MultiplyByScalar = vec2MultiplyByScalar;
exports.vec2Negate = vec2Negate;
exports.vec2Normalize = vec2Normalize;
exports.vec2Parse = vec2Parse;
exports.vec2Subtract = vec2Subtract;
exports.vec2ToArray = vec2ToArray;
exports.vec2ToString = vec2ToString;
exports.vec3Add = vec3Add;
exports.vec3Cross = vec3Cross;
exports.vec3Dot = vec3Dot;
exports.vec3Equals = vec3Equals;
exports.vec3FromArray = vec3FromArray;
exports.vec3Length = vec3Length;
exports.vec3Mix = vec3Mix;
exports.vec3MultiplyByScalar = vec3MultiplyByScalar;
exports.vec3Negate = vec3Negate;
exports.vec3Normalize = vec3Normalize;
exports.vec3Parse = vec3Parse;
exports.vec3Subtract = vec3Subtract;
exports.vec3ToArray = vec3ToArray;
exports.vec3ToString = vec3ToString;
exports.vec4Add = vec4Add;
exports.vec4Dot = vec4Dot;
exports.vec4Equals = vec4Equals;
exports.vec4FromArray = vec4FromArray;
exports.vec4Length = vec4Length;
exports.vec4Mix = vec4Mix;
exports.vec4MultiplyByScalar = vec4MultiplyByScalar;
exports.vec4Negate = vec4Negate;
exports.vec4Normalize = vec4Normalize;
exports.vec4Parse = vec4Parse;
exports.vec4Subtract = vec4Subtract;
exports.vec4ToArray = vec4ToArray;
exports.vec4ToString = vec4ToString;
exports.writeGraphToJSON = writeGraphToJSON;
exports.writeNodeSpecsToJSON = writeNodeSpecsToJSON;
