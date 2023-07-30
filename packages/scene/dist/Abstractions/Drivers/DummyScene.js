import { BooleanValue, EventEmitter, FloatValue, IntegerValue, StringValue } from 'ee-behave-graph-core';
import { ColorValue } from '../../Values/ColorValue.js';
import { EulerValue } from '../../Values/EulerValue.js';
import { QuatValue } from '../../Values/QuatValue.js';
import { Vec2Value } from '../../Values/Vec2Value.js';
import { Vec3Value } from '../../Values/Vec3Value.js';
import { Vec4Value } from '../../Values/Vec4Value.js';
export class DummyScene {
    constructor() {
        this.onSceneChanged = new EventEmitter();
        this.valueRegistry = Object.fromEntries([
            BooleanValue,
            StringValue,
            IntegerValue,
            FloatValue,
            Vec2Value,
            Vec3Value,
            Vec4Value,
            ColorValue,
            EulerValue,
            QuatValue
        ].map((valueType) => [valueType.name, valueType]));
        // pull in value type nodes
    }
    getProperty(jsonPath, valueTypeName) {
        return this.valueRegistry[valueTypeName]?.creator();
    }
    setProperty() {
        this.onSceneChanged.emit();
    }
    addOnClickedListener(jsonPath, callback) {
        console.log('added on clicked listener');
    }
    removeOnClickedListener(jsonPath, callback) {
        console.log('removed on clicked listener');
    }
    getQueryableProperties() {
        return [];
    }
    getRaycastableProperties() {
        return [];
    }
    getProperties() {
        return [];
    }
    addOnSceneChangedListener() {
        console.log('added on scene changed listener');
    }
    removeOnSceneChangedListener() {
        console.log('removed on scene changed listener');
    }
}
//# sourceMappingURL=DummyScene.js.map