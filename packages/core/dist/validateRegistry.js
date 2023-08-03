import { validateNodeRegistry } from './Nodes/Validation/validateNodeRegistry.js';
import { validateValueRegistry } from './Values/Validation/validateValueRegistry.js';
export function validateRegistry(registry) {
    const errorList = [];
    errorList.push(...validateValueRegistry(registry.values), ...validateNodeRegistry(registry));
    return errorList;
}
//# sourceMappingURL=validateRegistry.js.map