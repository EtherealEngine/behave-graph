import { XYPosition } from "reactflow";
export type NodePickerFilters = {
    handleType: "source" | "target";
    valueType: string;
};
type NodePickerProps = {
    position: XYPosition;
    filters?: NodePickerFilters;
    onPickNode: (type: string, position: XYPosition) => void;
    onClose: () => void;
};
declare const NodePicker: ({ position, onPickNode, onClose, filters, }: NodePickerProps) => import("react/jsx-runtime").JSX.Element;
export default NodePicker;
