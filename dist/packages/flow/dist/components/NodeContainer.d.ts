export default NodeContainer;
declare function NodeContainer({ title, category, selected, children }: {
    title: any;
    category?: NodeCategory | undefined;
    selected: any;
    children: any;
}): any;
import { NodeCategory } from '@behave-graph/core';
