export function makeConfig(code:string, callback:(arg:string)=>void, wasm:string, data?:string, args?:string[], input?:string):{};
export function bash(config?:{}):Promise<any>;
export function scheme(config?:{}):Promise<any>;
export function lua(config?:{}):Promise<any>;
export function c(config?:{}):Promise<any>;
export function python(config?:{}):Promise<any>;
export function javascript(config?:{}):Promise<any>;
export function ruby(config?:{}):Promise<any>;