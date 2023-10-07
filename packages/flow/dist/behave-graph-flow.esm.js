import ReactFlow, { useReactFlow, useEdges, useNodes, Controls, ControlButton, Handle, Position, useNodesState, useEdgesState, Background, BackgroundVariant } from 'reactflow';
import React$1, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { v4 } from 'uuid';
import Branch from 'behave-graph/dist/graphs/core/flow/Branch.json';
import Delay from 'behave-graph/dist/graphs/core/async/Delay.json';
import HelloWorld from 'behave-graph/dist/graphs/core//HelloWorld.json';
import Polynomial from 'behave-graph/dist/graphs/core/logic/Polynomial.json';
import SetGet from 'behave-graph/dist/graphs/core/variables/SetGet.json';
import { Registry, registerCoreProfile, registerSceneProfile, writeNodeSpecsToJSON, DefaultLogger, ManualLifecycleEventEmitter, readGraphFromJSON, Engine } from '@behave-graph/core';
import { faQuestion, faUpload, faDownload, faTrash, faPlay, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import rawSpecJson from 'behave-graph/dist/node-spec.json';

var useOnPressKey = (key, callback) => {
  useEffect(() => {
    var handleKeyDown = e => {
      if (e.code === key) {
        callback(e);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
};

var Modal = _ref => {
  var {
    open = false,
    onClose,
    title,
    children,
    actions
  } = _ref;
  useOnPressKey('Escape', onClose);
  if (open === false) return null;
  var actionColors = {
    primary: 'bg-teal-400 hover:bg-teal-500',
    secondary: 'bg-gray-400 hover:bg-gray-500'
  };
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", {
    className: "z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",
    onClick: onClose
  }), /*#__PURE__*/React$1.createElement("div", {
    className: "z-20 relative top-20 mx-auto border w-96 shadow-lg bg-white text-sm rounded-md"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "p-3 border-b"
  }, /*#__PURE__*/React$1.createElement("h2", {
    className: "text-lg text-center font-bold"
  }, title)), /*#__PURE__*/React$1.createElement("div", {
    className: "p-3"
  }, children), /*#__PURE__*/React$1.createElement("div", {
    className: "flex gap-3 p-3 border-t"
  }, actions.map((action, ix) => /*#__PURE__*/React$1.createElement("button", {
    key: ix,
    className: 'text-white p-2 w-full cursor-pointer ' + (ix === actions.length - 1 ? actionColors.primary : actionColors.secondary),
    onClick: action.onClick
  }, action.label)))));
};

var ClearModal = _ref => {
  var {
    open = false,
    onClose
  } = _ref;
  var instance = useReactFlow();
  var handleClear = () => {
    instance.setNodes([]);
    instance.setEdges([]);
    // TODO better way to call fit vew after edges render
    setTimeout(() => {
      instance.fitView();
    }, 100);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Clear Graph",
    actions: [{
      label: "Cancel",
      onClick: onClose
    }, {
      label: "Clear",
      onClick: handleClear
    }],
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("p", null, "Are you sure?"));
};

var HelpModal = _ref => {
  var {
    open = false,
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Help",
    actions: [{
      label: "Close",
      onClick: onClose
    }],
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-2"
  }, "Right click anywhere to add a new node."), /*#__PURE__*/React.createElement("p", {
    className: "mb-2"
  }, "Drag a connection into empty space to add a new node and connect it to the source."), /*#__PURE__*/React.createElement("p", {
    className: "mb-2"
  }, "Click and drag on a socket to connect to another socket of the same type."), /*#__PURE__*/React.createElement("p", null, "Left click to select nodes or connections, backspace to delete selected nodes or connections."));
};

var behaveToFlow = graph => {
  var _graph$nodes;
  var nodes = [];
  var edges = [];
  (_graph$nodes = graph.nodes) === null || _graph$nodes === void 0 || _graph$nodes.forEach(nodeJSON => {
    var _nodeJSON$metadata, _nodeJSON$metadata2, _nodeJSON$metadata3, _nodeJSON$metadata4;
    var node = {
      id: nodeJSON.id,
      type: nodeJSON.type,
      position: {
        x: (_nodeJSON$metadata = nodeJSON.metadata) !== null && _nodeJSON$metadata !== void 0 && _nodeJSON$metadata.positionX ? Number((_nodeJSON$metadata2 = nodeJSON.metadata) === null || _nodeJSON$metadata2 === void 0 ? void 0 : _nodeJSON$metadata2.positionX) : 0,
        y: (_nodeJSON$metadata3 = nodeJSON.metadata) !== null && _nodeJSON$metadata3 !== void 0 && _nodeJSON$metadata3.positionY ? Number((_nodeJSON$metadata4 = nodeJSON.metadata) === null || _nodeJSON$metadata4 === void 0 ? void 0 : _nodeJSON$metadata4.positionY) : 0
      },
      data: {}
    };
    nodes.push(node);
    if (nodeJSON.parameters) {
      for (var [inputKey, input] of Object.entries(nodeJSON.parameters)) {
        if ('link' in input && input.link !== undefined) {
          edges.push({
            id: v4(),
            source: input.link.nodeId,
            sourceHandle: input.link.socket,
            target: nodeJSON.id,
            targetHandle: inputKey
          });
        }
        if ('value' in input) {
          node.data[inputKey] = input.value;
        }
      }
    }
    if (nodeJSON.flows) {
      for (var [_inputKey, link] of Object.entries(nodeJSON.flows)) {
        edges.push({
          id: v4(),
          source: nodeJSON.id,
          sourceHandle: _inputKey,
          target: link.nodeId,
          targetHandle: link.socket
        });
      }
    }
  });
  return [nodes, edges];
};

var autoLayout = (nodes, edges) => {
  var x = 0;
  nodes.forEach(node => {
    node.position.x = x;
    x += 200;
  });
};

var hasPositionMetaData = graph => {
  if (graph.nodes === undefined) return false;
  return graph.nodes.some(node => {
    var _node$metadata, _node$metadata2;
    return ((_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.positionX) !== undefined || ((_node$metadata2 = node.metadata) === null || _node$metadata2 === void 0 ? void 0 : _node$metadata2.positionY) !== undefined;
  });
};

// TODO remove when json types fixed in behave-graph
var examples = {
  branch: Branch,
  delay: Delay,
  helloWorld: HelloWorld,
  polynomial: Polynomial,
  setGet: SetGet
};
var LoadModal = _ref => {
  var {
    open = false,
    onClose
  } = _ref;
  var [value, setValue] = useState();
  var [selected, setSelected] = useState("");
  var instance = useReactFlow();
  var handleLoad = () => {
    var graph;
    if (value !== undefined) {
      graph = JSON.parse(value);
    } else if (selected !== "") {
      graph = examples[selected];
    }
    if (graph === undefined) return;
    var [nodes, edges] = behaveToFlow(graph);
    if (hasPositionMetaData(graph) === false) {
      autoLayout(nodes);
    }
    instance.setNodes(nodes);
    instance.setEdges(edges);

    // TODO better way to call fit vew after edges render
    setTimeout(() => {
      instance.fitView();
    }, 100);
    handleClose();
  };
  var handleClose = () => {
    setValue(undefined);
    setSelected("");
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Load Graph",
    actions: [{
      label: "Cancel",
      onClick: handleClose
    }, {
      label: "Load",
      onClick: handleLoad
    }],
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("textarea", {
    autoFocus: true,
    className: "border border-gray-300 w-full p-2 h-32 align-top",
    placeholder: "Paste JSON here",
    value: value,
    onChange: e => setValue(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-4 text-center text-gray-800"
  }, "or"), /*#__PURE__*/React.createElement("select", {
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-3",
    onChange: e => setSelected(e.target.value),
    value: selected
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    value: ""
  }, "Select an example"), /*#__PURE__*/React.createElement("option", {
    value: "branch"
  }, "Branch"), /*#__PURE__*/React.createElement("option", {
    value: "delay"
  }, "Delay"), /*#__PURE__*/React.createElement("option", {
    value: "helloWorld"
  }, "Hello World"), /*#__PURE__*/React.createElement("option", {
    value: "polynomial"
  }, "Polynomial"), /*#__PURE__*/React.createElement("option", {
    value: "setGet"
  }, "Set/Get")));
};

var nodeSpecJSON$1 = undefined;
var getNodeSpecJSON = () => {
  if (nodeSpecJSON$1 === undefined) {
    var registry = new Registry();
    registerCoreProfile(registry);
    registerSceneProfile(registry);
    nodeSpecJSON$1 = writeNodeSpecsToJSON(registry);
  }
  return nodeSpecJSON$1;
};

var nodeSpecJSON = getNodeSpecJSON();
var isNullish = value => value === undefined || value === null;
var flowToBehave = (nodes, edges) => {
  var graph = {
    nodes: [],
    variables: [],
    customEvents: []
  };
  nodes.forEach(node => {
    var _graph$nodes;
    if (node.type === undefined) return;
    var nodeSpec = nodeSpecJSON.find(nodeSpec => nodeSpec.type === node.type);
    if (nodeSpec === undefined) return;
    var behaveNode = {
      id: node.id,
      type: node.type,
      metadata: {
        positionX: String(node.position.x),
        positionY: String(node.position.y)
      }
    };
    Object.entries(node.data).forEach(_ref => {
      var [key, value] = _ref;
      if (behaveNode.parameters === undefined) {
        behaveNode.parameters = {};
      }
      behaveNode.parameters[key] = {
        value: value
      };
    });
    edges.filter(edge => edge.target === node.id).forEach(edge => {
      var inputSpec = nodeSpec.inputs.find(input => input.name === edge.targetHandle);
      if (inputSpec && inputSpec.valueType === 'flow') {
        // skip flows
        return;
      }
      if (behaveNode.parameters === undefined) {
        behaveNode.parameters = {};
      }
      if (isNullish(edge.targetHandle)) return;
      if (isNullish(edge.sourceHandle)) return;

      // TODO: some of these are flow outputs, and should be saved differently.  -Ben, Oct 11, 2022
      behaveNode.parameters[edge.targetHandle] = {
        link: {
          nodeId: edge.source,
          socket: edge.sourceHandle
        }
      };
    });
    edges.filter(edge => edge.source === node.id).forEach(edge => {
      var outputSpec = nodeSpec.outputs.find(output => output.name === edge.sourceHandle);
      if (outputSpec && outputSpec.valueType !== 'flow') {
        return;
      }
      if (behaveNode.flows === undefined) {
        behaveNode.flows = {};
      }
      if (isNullish(edge.targetHandle)) return;
      if (isNullish(edge.sourceHandle)) return;

      // TODO: some of these are flow outputs, and should be saved differently.  -Ben, Oct 11, 2022
      behaveNode.flows[edge.sourceHandle] = {
        nodeId: edge.target,
        socket: edge.targetHandle
      };
    });

    // TODO filter out any orphan nodes at this point, to avoid errors further down inside behave-graph

    (_graph$nodes = graph.nodes) === null || _graph$nodes === void 0 || _graph$nodes.push(behaveNode);
  });
  return graph;
};

var SaveModal = _ref => {
  var {
    open = false,
    onClose
  } = _ref;
  var ref = useRef(null);
  var [copied, setCopied] = useState(false);
  var edges = useEdges();
  var nodes = useNodes();
  var flow = useMemo(() => flowToBehave(nodes, edges), [nodes, edges]);
  var jsonString = JSON.stringify(flow, null, 2);
  var handleCopy = () => {
    var _ref$current, _ref$current2;
    (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.select();
    document.execCommand("copy");
    (_ref$current2 = ref.current) === null || _ref$current2 === void 0 || _ref$current2.blur();
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 1000);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Save Graph",
    actions: [{
      label: "Cancel",
      onClick: onClose
    }, {
      label: copied ? "Copied" : "Copy",
      onClick: handleCopy
    }],
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    className: "border border-gray-300 w-full p-2 h-32",
    defaultValue: jsonString
  }));
};

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

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded = ["minWidth"];
var baseStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  visibility: "hidden",
  height: 0,
  width: "auto",
  whiteSpace: "pre"
};
var AutoSizeInput = _ref => {
  var {
      minWidth = 30
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputRef = useRef(null);
  var measureRef = useRef(null);
  var [styles, setStyles] = useState({});

  // grab the font size of the input on ref mount
  var setRef = useCallback(input => {
    if (input) {
      var _styles = window.getComputedStyle(input);
      setStyles({
        fontSize: _styles.getPropertyValue("font-size"),
        paddingLeft: _styles.getPropertyValue("padding-left"),
        paddingRight: _styles.getPropertyValue("padding-right")
      });
    }
    inputRef.current = input;
  }, []);

  // measure the text on change and update input
  useEffect(() => {
    if (measureRef.current === null) return;
    if (inputRef.current === null) return;
    var width = measureRef.current.clientWidth;
    inputRef.current.style.width = Math.max(minWidth, width) + "px";
  }, [props.value, minWidth, styles]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
    ref: setRef
  }, props)), /*#__PURE__*/React.createElement("span", {
    ref: measureRef,
    style: _objectSpread2(_objectSpread2({}, baseStyles), styles)
  }, props.value));
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/* eslint-disable no-promise-executor-return */
function sleep(durationInSeconds) {
  return new Promise(resolve => setTimeout(resolve, Math.round(durationInSeconds * 1000)));
}

var CustomControls = () => {
  var [loadModalOpen, setLoadModalOpen] = useState(false);
  var [saveModalOpen, setSaveModalOpen] = useState(false);
  var [helpModalOpen, setHelpModalOpen] = useState(false);
  var [clearModalOpen, setClearModalOpen] = useState(false);
  var instance = useReactFlow();
  var handleRun = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      var registry = new Registry();
      var logger = new DefaultLogger();
      var manualLifecycleEventEmitter = new ManualLifecycleEventEmitter();
      registerCoreProfile(registry, logger, manualLifecycleEventEmitter);
      registerSceneProfile(registry);
      var nodes = instance.getNodes();
      var edges = instance.getEdges();
      var graphJson = flowToBehave(nodes, edges);
      var graph = readGraphFromJSON(graphJson, registry);
      var engine = new Engine(graph);
      if (manualLifecycleEventEmitter.startEvent.listenerCount > 0) {
        manualLifecycleEventEmitter.startEvent.emit();
        yield engine.executeAllAsync(5);
      }
      if (manualLifecycleEventEmitter.tickEvent.listenerCount > 0) {
        var iterations = 20;
        var tickDuration = 0.01;
        for (var tick = 0; tick < iterations; tick++) {
          manualLifecycleEventEmitter.tickEvent.emit();
          engine.executeAllSync(tickDuration);
          yield sleep(tickDuration);
        }
      }
      if (manualLifecycleEventEmitter.endEvent.listenerCount > 0) {
        manualLifecycleEventEmitter.endEvent.emit();
        yield engine.executeAllAsync(5);
      }
    });
    return function handleRun() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Controls, null, /*#__PURE__*/React.createElement(ControlButton, {
    title: "Help",
    onClick: () => setHelpModalOpen(true)
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faQuestion
  })), /*#__PURE__*/React.createElement(ControlButton, {
    title: "Load",
    onClick: () => setLoadModalOpen(true)
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUpload
  })), /*#__PURE__*/React.createElement(ControlButton, {
    title: "Save",
    onClick: () => setSaveModalOpen(true)
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faDownload
  })), /*#__PURE__*/React.createElement(ControlButton, {
    title: "Clear",
    onClick: () => setClearModalOpen(true)
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTrash
  })), /*#__PURE__*/React.createElement(ControlButton, {
    title: "Run",
    onClick: () => handleRun()
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faPlay
  }))), /*#__PURE__*/React.createElement(LoadModal, {
    open: loadModalOpen,
    onClose: () => setLoadModalOpen(false)
  }), /*#__PURE__*/React.createElement(SaveModal, {
    open: saveModalOpen,
    onClose: () => setSaveModalOpen(false)
  }), /*#__PURE__*/React.createElement(HelpModal, {
    open: helpModalOpen,
    onClose: () => setHelpModalOpen(false)
  }), /*#__PURE__*/React.createElement(ClearModal, {
    open: clearModalOpen,
    onClose: () => setClearModalOpen(false)
  }));
};
var CustomControls$1 = CustomControls;

var colors = {
  red: ['bg-orange-700', 'border-orange-700', 'text-white'],
  green: ['bg-green-600', 'border-green-600', 'text-white'],
  lime: ['bg-lime-500', 'border-lime-500', 'text-white'],
  purple: ['bg-purple-500', 'border-purple-500', 'text-white'],
  blue: ['bg-cyan-600', 'border-cyan-600', 'text-white'],
  gray: ['bg-gray-500', 'border-gray-500', 'text-white'],
  white: ['bg-white', 'border-white', 'text-gray-700']
};
var valueTypeColorMap = {
  flow: 'white',
  number: 'green',
  float: 'green',
  integer: 'lime',
  boolean: 'red',
  string: 'purple'
};
var categoryColorMap = {
  Event: 'red',
  Logic: 'green',
  Variable: 'purple',
  Query: 'purple',
  Action: 'blue',
  Flow: 'gray',
  Time: 'gray',
  None: 'gray'
};

var getSocketsByNodeTypeAndHandleType = (nodes, nodeType, handleType) => {
  var nodeSpec = nodes.find(node => node.type === nodeType);
  if (nodeSpec === undefined) return;
  return handleType === 'source' ? nodeSpec.outputs : nodeSpec.inputs;
};

var isHandleConnected = (edges, nodeId, handleId, type) => {
  return edges.some(edge => edge[type] === nodeId && edge["".concat(type, "Handle")] === handleId);
};

var specJSON$3 = getNodeSpecJSON();
var isValidConnection = (connection, instance) => {
  if (connection.source === null || connection.target === null) return false;
  var sourceNode = instance.getNode(connection.source);
  var targetNode = instance.getNode(connection.target);
  var edges = instance.getEdges();
  if (sourceNode === undefined || targetNode === undefined) return false;
  var sourceSockets = getSocketsByNodeTypeAndHandleType(specJSON$3, sourceNode.type, 'source');
  var sourceSocket = sourceSockets === null || sourceSockets === void 0 ? void 0 : sourceSockets.find(socket => socket.name === connection.sourceHandle);
  var targetSockets = getSocketsByNodeTypeAndHandleType(specJSON$3, targetNode.type, 'target');
  var targetSocket = targetSockets === null || targetSockets === void 0 ? void 0 : targetSockets.find(socket => socket.name === connection.targetHandle);
  if (sourceSocket === undefined || targetSocket === undefined) return false;

  // only flow sockets can have two inputs
  if (targetSocket.valueType !== 'flow' && isHandleConnected(edges, targetNode.id, targetSocket.name, 'target')) {
    return false;
  }
  return sourceSocket.valueType === targetSocket.valueType;
};

function InputSocket(_ref) {
  var _ref2, _String, _ref3, _String2, _ref4, _String3, _ref5, _String4, _ref6, _String5;
  var {
    connected,
    value,
    onChange: _onChange,
    name,
    valueType,
    defaultValue
  } = _ref;
  var instance = useReactFlow();
  var isFlowSocket = valueType === "flow";
  var colorName = valueTypeColorMap[valueType];
  if (colorName === undefined) {
    colorName = "red";
  }
  var [backgroundColor, borderColor] = colors[colorName];
  var showName = isFlowSocket === false || name !== "flow";
  return /*#__PURE__*/React.createElement("div", {
    className: "flex grow items-center justify-start h-7"
  }, isFlowSocket && /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCaretRight,
    color: "#ffffff",
    size: "lg"
  }), showName && /*#__PURE__*/React.createElement("div", {
    className: "capitalize mr-2"
  }, name), isFlowSocket === false && connected === false && /*#__PURE__*/React.createElement(React.Fragment, null, valueType === "string" && /*#__PURE__*/React.createElement(AutoSizeInput, {
    type: "text",
    className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag",
    value: (_ref2 = (_String = String(value)) !== null && _String !== void 0 ? _String : defaultValue) !== null && _ref2 !== void 0 ? _ref2 : "",
    onChange: e => _onChange(name, e.currentTarget.value)
  }), valueType === "number" && /*#__PURE__*/React.createElement(AutoSizeInput, {
    type: "number",
    className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag",
    value: (_ref3 = (_String2 = String(value)) !== null && _String2 !== void 0 ? _String2 : defaultValue) !== null && _ref3 !== void 0 ? _ref3 : "",
    onChange: e => _onChange(name, e.currentTarget.value)
  }), valueType === "float" && /*#__PURE__*/React.createElement(AutoSizeInput, {
    type: "number",
    className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag",
    value: (_ref4 = (_String3 = String(value)) !== null && _String3 !== void 0 ? _String3 : defaultValue) !== null && _ref4 !== void 0 ? _ref4 : "",
    onChange: e => _onChange(name, e.currentTarget.value)
  }), valueType === "integer" && /*#__PURE__*/React.createElement(AutoSizeInput, {
    type: "number",
    className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag",
    value: (_ref5 = (_String4 = String(value)) !== null && _String4 !== void 0 ? _String4 : defaultValue) !== null && _ref5 !== void 0 ? _ref5 : "",
    onChange: e => _onChange(name, e.currentTarget.value)
  }), valueType === "boolean" && /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag",
    value: (_ref6 = (_String5 = String(value)) !== null && _String5 !== void 0 ? _String5 : defaultValue) !== null && _ref6 !== void 0 ? _ref6 : "",
    onChange: e => _onChange(name, e.currentTarget.checked)
  })), /*#__PURE__*/React.createElement(Handle, {
    id: name,
    type: "target",
    position: Position.Left,
    className: cx(borderColor, connected ? backgroundColor : "bg-gray-800"),
    isValidConnection: connection => isValidConnection(connection, instance)
  }));
}

function NodeContainer(_ref) {
  var {
    title,
    category = "None",
    selected,
    children
  } = _ref;
  var colorName = categoryColorMap[category];
  if (colorName === undefined) {
    colorName = "red";
  }
  var [backgroundColor, borderColor, textColor] = colors[colorName];
  if (selected) {
    borderColor = "border-gray-800";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cx("rounded text-white text-sm bg-gray-800 min-w-[120px]", selected && "outline outline-1")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(backgroundColor, " ").concat(textColor, " px-2 py-1 rounded-t")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 py-2 border-l border-r border-b ".concat(borderColor, " ")
  }, children));
}

function OutputSocket(_ref) {
  var {
    connected,
    valueType,
    name
  } = _ref;
  var instance = useReactFlow();
  var isFlowSocket = valueType === "flow";
  var colorName = valueTypeColorMap[valueType];
  if (colorName === undefined) {
    colorName = "red";
  }
  var [backgroundColor, borderColor] = colors[colorName];
  var showName = isFlowSocket === false || name !== "flow";
  return /*#__PURE__*/React.createElement("div", {
    className: "flex grow items-center justify-end h-7"
  }, showName && /*#__PURE__*/React.createElement("div", {
    className: "capitalize"
  }, name), isFlowSocket && /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCaretRight,
    color: "#ffffff",
    size: "lg",
    className: "ml-1"
  }), /*#__PURE__*/React.createElement(Handle, {
    id: name,
    type: "source",
    position: Position.Right,
    className: cx(borderColor, connected ? backgroundColor : "bg-gray-800"),
    isValidConnection: connection => isValidConnection(connection, instance)
  }));
}

var useChangeNodeData = id => {
  var instance = useReactFlow();
  return useCallback((key, value) => {
    instance.setNodes(nodes => nodes.map(n => {
      if (n.id !== id) return n;
      return _objectSpread2(_objectSpread2({}, n), {}, {
        data: _objectSpread2(_objectSpread2({}, n.data), {}, {
          [key]: value
        })
      });
    }));
  }, [instance, id]);
};

// import styles from "./Node.module.css"

var getPairs = (arr1, arr2) => {
  var max = Math.max(arr1.length, arr2.length);
  var pairs = [];
  for (var i = 0; i < max; i++) {
    var pair = [arr1[i], arr2[i]];
    pairs.push(pair);
  }
  return pairs;
};
var Node = _ref => {
  var {
    id,
    data,
    spec,
    selected
  } = _ref;
  var edges = useEdges();
  var handleChange = useChangeNodeData(id);
  var pairs = getPairs(spec.inputs, spec.outputs);
  return /*#__PURE__*/React.createElement(NodeContainer, {
    title: spec.label,
    category: spec.category,
    selected: selected
  }, pairs.map((_ref2, ix) => {
    var _data$input$name;
    var [input, output] = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      key: ix,
      className: "flex flex-row justify-between gap-8 relative px-2"
      // className={styles.container}
    }, input && /*#__PURE__*/React.createElement(InputSocket, _extends({}, input, {
      value: (_data$input$name = data[input.name]) !== null && _data$input$name !== void 0 ? _data$input$name : input.defaultValue,
      onChange: handleChange,
      connected: isHandleConnected(edges, id, input.name, 'target')
    })), output && /*#__PURE__*/React.createElement(OutputSocket, _extends({}, output, {
      connected: isHandleConnected(edges, id, output.name, 'source')
    })));
  }));
};

var specJSON$2 = rawSpecJson;
var nodes = specJSON$2;
var NodePicker = _ref => {
  var {
    position,
    onPickNode,
    onClose,
    filters
  } = _ref;
  var [search, setSearch] = useState("");
  var instance = useReactFlow();
  useOnPressKey("Escape", onClose);
  var filtered = nodes;
  if (filters !== undefined) {
    filtered = filtered.filter(node => {
      var sockets = (filters === null || filters === void 0 ? void 0 : filters.handleType) === "source" ? node.outputs : node.inputs;
      return sockets.some(socket => socket.valueType === (filters === null || filters === void 0 ? void 0 : filters.valueType));
    });
  }
  filtered = filtered.filter(node => {
    var term = search.toLowerCase();
    return node.type.toLowerCase().includes(term);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "node-picker absolute z-10 text-sm text-white bg-gray-800 border rounded border-gray-500",
    style: {
      top: position.y,
      left: position.x
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-500 p-2"
  }, "Add Node"), /*#__PURE__*/React.createElement("div", {
    className: "p-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    autoFocus: true,
    placeholder: "Type to filter",
    className: " bg-gray-600 disabled:bg-gray-700 w-full py-1 px-2",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-h-48 overflow-y-scroll"
  }, filtered.map(_ref2 => {
    var {
      type
    } = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      key: type,
      className: "p-2 cursor-pointer border-b border-gray-600",
      onClick: () => onPickNode(type, instance.project(position))
    }, type);
  })));
};
var NodePicker$1 = NodePicker;

var specJSON$1 = getNodeSpecJSON();
var calculateNewEdge = (originNode, destinationNodeType, destinationNodeId, connection) => {
  var _connection$nodeId2;
  var sockets = getSocketsByNodeTypeAndHandleType(specJSON$1, originNode.type, connection.handleType);
  var originSocket = sockets === null || sockets === void 0 ? void 0 : sockets.find(socket => socket.name === connection.handleId);
  var newSockets = getSocketsByNodeTypeAndHandleType(specJSON$1, destinationNodeType, connection.handleType === 'source' ? 'target' : 'source');
  var newSocket = newSockets === null || newSockets === void 0 ? void 0 : newSockets.find(socket => socket.valueType === (originSocket === null || originSocket === void 0 ? void 0 : originSocket.valueType));
  if (connection.handleType === 'source') {
    var _connection$nodeId;
    return {
      id: v4(),
      source: (_connection$nodeId = connection.nodeId) !== null && _connection$nodeId !== void 0 ? _connection$nodeId : '',
      sourceHandle: connection.handleId,
      target: destinationNodeId,
      targetHandle: newSocket === null || newSocket === void 0 ? void 0 : newSocket.name
    };
  }
  return {
    id: v4(),
    target: (_connection$nodeId2 = connection.nodeId) !== null && _connection$nodeId2 !== void 0 ? _connection$nodeId2 : '',
    targetHandle: connection.handleId,
    source: destinationNodeId,
    sourceHandle: newSocket === null || newSocket === void 0 ? void 0 : newSocket.name
  };
};

var spec = getNodeSpecJSON();
var customNodeTypes = spec.reduce((nodes, node) => {
  nodes[node.type] = props => /*#__PURE__*/React.createElement(Node, _extends({
    spec: node
  }, props));
  return nodes;
}, {});

var specJSON = getNodeSpecJSON();
var getNodePickerFilters = (nodes, params) => {
  if (params === undefined) return;
  var originNode = nodes.find(node => node.id === params.nodeId);
  if (originNode === undefined) return;
  var sockets = getSocketsByNodeTypeAndHandleType(specJSON, originNode.type, params.handleType);
  var socket = sockets === null || sockets === void 0 ? void 0 : sockets.find(socket => socket.name === params.handleId);
  if (socket === undefined) return;
  return {
    handleType: params.handleType === 'source' ? 'target' : 'source',
    valueType: socket.valueType
  };
};

var Flow = _ref => {
  var {
    graph
  } = _ref;
  var [nodePickerVisibility, setNodePickerVisibility] = useState();
  var [lastConnectStart, setLastConnectStart] = useState();
  var [initialNodes, initialEdges] = useMemo(() => behaveToFlow(graph), [graph]);
  var [nodes,, onNodesChange] = useNodesState(initialNodes);
  var [edges,, onEdgesChange] = useEdgesState(initialEdges);
  var onConnect = useCallback(connection => {
    if (connection.source === null) return;
    if (connection.target === null) return;
    var newEdge = {
      id: v4(),
      source: connection.source,
      target: connection.target,
      sourceHandle: connection.sourceHandle,
      targetHandle: connection.targetHandle
    };
    onEdgesChange([{
      type: "add",
      item: newEdge
    }]);
  }, [onEdgesChange]);
  var handleAddNode = useCallback((nodeType, position) => {
    closeNodePicker();
    var newNode = {
      id: v4(),
      type: nodeType,
      position,
      data: {}
    };
    onNodesChange([{
      type: "add",
      item: newNode
    }]);
    if (lastConnectStart === undefined) return;

    // add an edge if we started on a socket
    var originNode = nodes.find(node => node.id === lastConnectStart.nodeId);
    if (originNode === undefined) return;
    onEdgesChange([{
      type: "add",
      item: calculateNewEdge(originNode, nodeType, newNode.id, lastConnectStart)
    }]);
  }, [lastConnectStart, nodes, onEdgesChange, onNodesChange]);
  var handleStartConnect = (e, params) => {
    setLastConnectStart(params);
  };
  var handleStopConnect = e => {
    var element = e.target;
    if (element.classList.contains("react-flow__pane")) {
      setNodePickerVisibility({
        x: e.clientX,
        y: e.clientY
      });
    } else {
      setLastConnectStart(undefined);
    }
  };
  var closeNodePicker = () => {
    setLastConnectStart(undefined);
    setNodePickerVisibility(undefined);
  };
  var handlePaneClick = () => closeNodePicker();
  var handlePaneContextMenu = e => {
    e.preventDefault();
    setNodePickerVisibility({
      x: e.clientX,
      y: e.clientY
    });
  };
  return /*#__PURE__*/React.createElement(ReactFlow, {
    nodeTypes: customNodeTypes,
    nodes: nodes,
    edges: edges,
    onNodesChange: onNodesChange,
    onEdgesChange: onEdgesChange,
    onConnect: onConnect,
    onConnectStart: handleStartConnect,
    onConnectEnd: handleStopConnect,
    fitView: true,
    fitViewOptions: {
      maxZoom: 1
    },
    onPaneClick: handlePaneClick,
    onPaneContextMenu: handlePaneContextMenu
  }, /*#__PURE__*/React.createElement(CustomControls$1, null), /*#__PURE__*/React.createElement(Background, {
    variant: BackgroundVariant.Lines,
    color: "#2a2b2d",
    style: {
      backgroundColor: "#1E1F22"
    }
  }), nodePickerVisibility && /*#__PURE__*/React.createElement(NodePicker$1, {
    position: nodePickerVisibility,
    filters: getNodePickerFilters(nodes, lastConnectStart),
    onPickNode: handleAddNode,
    onClose: closeNodePicker
  }));
};

export { AutoSizeInput, ClearModal, Flow, HelpModal, LoadModal, Modal, Node, SaveModal, autoLayout, behaveToFlow, calculateNewEdge, categoryColorMap, colors, customNodeTypes, flowToBehave, getNodePickerFilters, getNodeSpecJSON, getSocketsByNodeTypeAndHandleType, hasPositionMetaData, isHandleConnected, isValidConnection, sleep, useChangeNodeData, useOnPressKey, valueTypeColorMap };
