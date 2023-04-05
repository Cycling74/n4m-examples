# Typescript
Use [Typescript](https://www.typescriptlang.org/) to author your Node for Max scripts.

## Usage
This simple example showcases how to use Typescript and the `@types/max-api` package in order to author
your Node for Max code.

1. The `tsconfig.json` file provides a simply configuration in order to be able to compile the TS code of this example.
Note that the configuration targets Node v16 which is the current version shipped with Node for Max.
2. The source code is placed in `src/n4m.typescript.ts`
3. Open `n4m.ts.maxpat` which has more instructions


## Disclaimer

The `n4m.ts.index.js` file is used as a simple entrypoint here in order to avoid headaches with having to copy the
`lib` folder into your search path for people that didn't clone the whole repo into their Search Path.

You might not need to do this in your patch, which is probably either part of a Max project or placed in your Search Path already.
