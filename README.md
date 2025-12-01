# shift-wasm

WebAssembly runtime for Python, Lua, Ruby and etc.

Online demo: https://shift.js.org/

## Install

```shell
npm install shift-wasm
```

## Usage

| Language    | WASM File                                                   | Data File                             |
| :-          | :-                                                          | :-                                    |
| Python      | shift-wasm/assets/python.wasm                               | shift-wasm/assets/python.data         |
| JavaScript  | shift-wasm/assets/qjs.wasm                                  |                                       |
| Lua         | shift-wasm/assets/lua.wasm                                  |                                       |
| Bash        | shift-wasm/assets/bash.wasm                                 |                                       |
| Ruby        | shift-wasm/assets/ruby.wasm                                 |                                       |
| Scheme      | shift-wasm/assets/chibi.wasm                                | shift-wasm/assets/chibi.data          |
| C           | shift-wasm/assets/picoc.wasm                                |                                       |

Examples in Vite and React environments:

```js
import { useEffect } from "react"
import { makeConfig, python } from "shift-wasm"

// get location of .wasm and .data files
import wasm from "shift-wasm/assets/python.wasm?url";
import data from "shift-wasm/assets/python.data?url";

function App() {
    useEffect(() => {
        // the code to run
        const code = "print('hello world')";

        // callback to get result
        const fn = (text:string) => (document.querySelector("#output") as HTMLElement).innerText = text;

        // run the code
        python(makeConfig(code, fn, wasm, data));
    })
    
    return <pre id="output"></pre>
}

export default App
```

> Different build tools use different ways to get location of `.wasm` and `.data` files.

Additionally, you may need to exclude `ws`, for example, vite and rollup:

```js
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      external: ["ws"],
    }
  },
})
```

## Usage via external module

```html
<html>
    <body>
        <!-- Create a element to display output -->
        <pre id="output"></pre>
        <script type="module">
            // Load module
            import python from "https://shift.js.org/wasm/python.js";           // interpreter runtime
            import makeConfig from "https://shift.js.org/wasm/common.js" ;      // interpreter config

            // the code to run
            const code = "print('hello world')";

            // callback to get result
            const fn = (text) => document.querySelector("#output").innerText = text;

            // run the code
            python(makeConfig(code, fn));
        </script>
    </body>
</html>
```

> `makeConfig` in external module is different from this package, it does not need the `wasm` and `data` parameters.


### Refer page in `<iframe>`

```html
<html>
    <body>
        <!-- iframe to display shift -->
        <iframe id="code" title="Shift" style="width: 100%; height: 600px; border: 0;"></iframe>

        <script>
            const lang = 'lua';                     // language
            const input_text = '';                  // data of STDIN
            const code_text = 'print("hello")';     // code to run

            // generate URL
            const input = encodeURIComponent(btoa(encodeURIComponent(input_text)));
            const code = encodeURIComponent(btoa(encodeURIComponent(code_text)));
            const url = `https://shift.js.org/#lang=${lang}&input=${input}&code=${code}`;
            
            // set iframe src
            document.querySelector("#code").src = url;
        </script>
    </body>
</html>
```