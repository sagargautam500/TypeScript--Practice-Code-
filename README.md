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

## 4. Configuring Root Directory and Output Directory
- Set the root directory (`rootDir`) for TypeScript source files in `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "rootDir": "src"
    }
  }
  ```
- Set the output directory (`outDir`) where compiled JavaScript files will be placed:
  ```json
  {
    "compilerOptions": {
      "outDir": "dist"
    }
  }
  ```
- Set the target ECMAScript version to `ES2023`:
  ```json
  {
    "compilerOptions": {
      "target": "ES2023"
    }
  }
  ```
- Exclude specific files or directories from compilation:
  ```json
  {
    "exclude": ["node_modules", "dist"]
  }
  ```
- Include specific files or directories for compilation:
  ```json
  {
    "include": ["src/**/*.ts"]
  }
  ```
- Compile the project using:
  ```sh
  tsc
  ```

## 5. Other Important Commands
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
