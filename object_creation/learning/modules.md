# CommonJS Modules

**Steps to Use a CommonJS module**
1. Install the module with the Node package Manager, NPM.
2. Import it into a program with the `require` function.

    ```javascript
    const readline = require('readline-sync');
    let choice = readline.question('Do you want to run this program? (y/n)');
    ```

**Support**
Node.js supports CommonJS modules.
Browsers don't support CommonJS modules.
  This is because CommonJS modules are loaded synchronously, which is too slow for browsers.
  However, you can use CommonJS friendly code in a browser environment via a "transpiler"

## Creating CommonJS Modules

1. Create a file with the code that you want to modularize.
2. Add some additional code to export the items that you want other modules to use:

    ```javascript
    function logIt(string) {
      console.log(string);
    }

    module.exports = logIt;
    ```
3. You can then import the module file into your main program (or another module).
4. When importing modules that weren't imported with NPM, you need to specify the path to the module file.

    ```javascript
    const logIt = require('./logit');
    logIt('You rock!');
    ```

5. You can export any values you want from a module: functions, constants, variables, classes.
6. You can also export multiple items at once:

    ```javascript
    // logit.js
    let prefix = '>> ';

    function logIt(string) {
      console.log(`${prefix}${string}`);
    }

    function setPrefix(newPrefix) {
      prefix = newPrefix;
    }

    module.exports = {
      logIt,
      setPrefix,
    };
    ```

    ```javascript
    // main.js
    const { logIt, setPrefix } = require('./logit');
    logIt('You rock!'); // >> You rock!
    setPrefix('++ ');
    logIt('You rock!'); // ++ You rock!
    ```

## CommonJS Variables

In Node, all code is part of a CommonJS module, including the main program.
Each module provides several variables that you can use in your code:

- `module`: An object that represents the current module
- `exports`: The name(s) exported by the module (same as module.exports)
- `require(moduleName)`: The function that loads a module
- `__dirname`: The absolute pathname of the directory that contains the module
- `__filename`: The absolute pathname of the file that contains the module


# JS Modules

*Browserify*: Developers can run this program to build a single large JavaScript file that contains all of the modules that the web application needs. The browser only has to download this single file.

*Babel*: Transpiles (converts) ES6 code to ES5 code that works in older browsers.

## Using JS Modules

Example case:
  ```javascript
  // foo.js
  import { bar } from './bar';

  let xyz = 1;

  export function foo() {
    console.log(xyz);
    xyz += 1;
    bar();
  }
  ```

  ```javascript
  // bar.js
  export let items = [];
  export let counter = 0;

  export function bar() {
    count += 1;
    items.push(`item ${counter}`);
  }

  export function getCounter() {
    return counter;
  }
  ```

  ```javascript
  // main.js
  import { foo } from './foo';
  import { bar, getCounter, items, counter } from './bar';

  foo();
  console.log(items);         // ["item 1"]
  console.log(getCounter());  // 1
  console.log(counter);       // 1

  bar();
  console.log(items);         // ["item 1", "item2"]
  console.log(getCounter());  // 2
  console.log(counter);       // 2
  ```

Anything not explicitly exported is local to the module.

**IMPORTANT NOTE**
Node does not support ES6 JS Modules directly.
Recent versions of Node do provide ways to use ES Modules:
  1. Renaming the modules
  2. Updating `package.json`
  3. Older versions of Node can use Babel transpiled ES6 modules
