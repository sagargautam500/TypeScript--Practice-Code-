# TypeScript Notes

## 1. Installing TypeScript
To install TypeScript globally, use the following command:
```sh
npm install -g typescript
```
After installation, verify the installation by checking the TypeScript version:
```sh
tsc --version
```

## 2. Compiling and Running TypeScript
- Create a TypeScript file:
  ```sh
  touch index.ts
  ```
- Compile TypeScript to JavaScript:
  ```sh
  tsc index.ts
  ```
- Run the compiled JavaScript file:
  ```sh
  node index.js
  ```

## 3. Using Watch Mode
Watch mode automatically recompiles TypeScript files when changes are detected.
- Watch a single file:
  ```sh
  tsc index.ts --watch
  ```
- Watch the entire project (requires `tsconfig.json`):
  ```sh
  tsc --watch
  ```

## 4. Other Important Commands
- **Initialize a TypeScript project:**
  ```sh
  tsc --init
  ```
- **Compile all TypeScript files in a project:**
  ```sh
  tsc
  ```
- **Run TypeScript file directly using `ts-node` (without compilation):**
  ```sh
  npm install -g ts-node
  ts-node index.ts
  ```
- **Check TypeScript version:**
  ```sh
  tsc -v
  ```

These commands and steps will help you easily work with TypeScript.
