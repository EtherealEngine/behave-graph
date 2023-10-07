'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./behave-graph-flow.cjs.prod.js");
} else {
  module.exports = require("./behave-graph-flow.cjs.dev.js");
}
