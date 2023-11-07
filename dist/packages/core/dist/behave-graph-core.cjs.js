'use strict';
if (process.env.NODE_ENV === "production") {
    module.exports = require("./behave-graph-core.cjs.prod.js");
}
else {
    module.exports = require("./behave-graph-core.cjs.dev.js");
}
export {};
//# sourceMappingURL=behave-graph-core.cjs.js.map