import { Registry } from "../../Registry.js";
import { ILifecycleEventEmitter } from "./Abstractions/ILifecycleEventEmitter.js";
import { ILogger } from "./Abstractions/ILogger.js";
export declare function registerCoreProfile(registry: Registry, logger?: ILogger, lifecycleEventEmitter?: ILifecycleEventEmitter): Registry;
