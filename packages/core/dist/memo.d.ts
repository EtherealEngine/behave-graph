export declare function memo<T>(func: () => T): () => T;
export declare function asyncMemo<T>(func: () => Promise<T>): () => Promise<T>;
