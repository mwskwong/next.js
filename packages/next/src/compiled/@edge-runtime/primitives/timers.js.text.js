module.exports = "\"use strict\";\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\n\n// src/primitives/timers.js\nvar timers_exports = {};\n__export(timers_exports, {\n  setInterval: () => setIntervalProxy,\n  setTimeout: () => setTimeoutProxy\n});\nmodule.exports = __toCommonJS(timers_exports);\nvar setTimeoutProxy = new Proxy(setTimeout, {\n  apply: (target, thisArg, args) => {\n    const timeout = Reflect.apply(target, thisArg, args);\n    return timeout[Symbol.toPrimitive]();\n  }\n});\nvar setIntervalProxy = new Proxy(setInterval, {\n  apply: (target, thisArg, args) => {\n    const timeout = Reflect.apply(target, thisArg, args);\n    return timeout[Symbol.toPrimitive]();\n  }\n});\n// Annotate the CommonJS export names for ESM import in node:\n0 && (module.exports = {\n  setInterval,\n  setTimeout\n});\n"