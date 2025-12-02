export function makeConfig(code:string, callback:(stdout:string, stderr:string, mix:string)=>void, wasm:string, data?:string, input?:string, args?:string[]):{};
export function bash(config?:{}):Promise<any>;
export function scheme(config?:{}):Promise<any>;
export function lua(config?:{}):Promise<any>;
export function c(config?:{}):Promise<any>;
export function python(config?:{}):Promise<any>;
export function javascript(config?:{}):Promise<any>;
export function ruby(config?:{}):Promise<any>;