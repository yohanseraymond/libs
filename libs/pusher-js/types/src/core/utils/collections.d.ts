export declare function extend<T>(target: any, ...sources: any[]): T;
export declare function stringify(): string;
export declare function arrayIndexOf(array: any[], item: any): number;
export declare function objectApply(object: any, f: Function): void;
export declare function keys(object: any): string[];
export declare function values(object: any): any[];
export declare function apply(array: any[], f: Function, context?: any): void;
export declare function map(array: any[], f: Function): any[];
export declare function mapObject(object: any, f: Function): any;
export declare function filter(array: any[], test: Function): any[];
export declare function filterObject(object: Object, test: Function): {};
export declare function flatten(object: Object): any[];
export declare function any(array: any[], test: Function): boolean;
export declare function all(array: any[], test: Function): boolean;
export declare function encodeParamsObject(data: any): string;
export declare function buildQueryString(data: any): string;
export declare function decycleObject(object: any): any;
export declare function safeJSONStringify(source: any): string;
