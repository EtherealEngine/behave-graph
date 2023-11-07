import { Flow } from '@behave-graph/flow';
import React from 'react';
import Branch from '../../../../graphs/core/flow/Branch.json';
import HelloWorld from '../../../../graphs/core/HelloWorld.json';
import Polynomial from '../../../../graphs/core/logic/Polynomial.json';
import Delay from '../../../../graphs/core/time/Delay.json';
import SetGet from '../../../../graphs/core/variables/SetGet.json';
import rawGraph from '../graph.json';
import { useRegistry } from '../hooks/useRegistry.js';
const graph = rawGraph;
// TODO remove when json types fixed in behave-graph
const examples = {
    branch: Branch,
    delay: Delay,
    helloWorld: HelloWorld,
    polynomial: Polynomial,
    setGet: SetGet
};
const MyFlow = () => {
    const registry = useRegistry();
    return <Flow registry={registry} initialGraph={graph} examples={examples}/>;
};
export default MyFlow;
//# sourceMappingURL=MyFlow.js.map