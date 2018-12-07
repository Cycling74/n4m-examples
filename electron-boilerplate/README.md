# electron-boilerplate

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A very simple example of using Electron in N4M project.  
> Uses Socket.io to communicate between the main process and the renderer process, and also Max API to bring data back and forth between the main process and the max patch.

## Table of Contents

- [electron-boilerplate](#electron-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Development](#development)
    - [Basic Knowledge to know](#basic-knowledge-to-know)
    - [File Structure (simplified)](#file-structure-simplified)
    - [References](#references)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [License](#license)

## Usage

Open `main.maxpat` and follow the instructions.

## Development

### Basic Knowledge to know

*This section is for Node.js developers:*

If you are familiar with Node.js development, there's not much thing you have to know. Just use your locally installed `npm` / `yarn` to manage packages, and test with your local `node`.  
But remember that your local `node` version should match that of runtime, in other words, the one installed inside `Max.app`.  
I suggest using something like `nodenv`, `nodebrew`, or any type of version control system.

### File Structure (simplified)

.  
├── README.md  
├── electron  
│   ├── package.json  
│   ├── src  
│   ├── webpack.config.js  
├── index.js  
├── main.maxpat  
└── package.json  

The flow of the entire process is as follows:

1. A user will open `main.maxpat` and hit `npm run setup` that is connected to `'node.script index.js'`.  
1. This will fire the npm script written in `./package.json`, which has 3 tasks:  
  2.1 Install the package for the top-level folder. (here)  
  2.2 Install the package in the `electron` folder.  
  2.3 Build the electron app with babel and webpack. A bundled js file will be emitted to `./electron/dist/`.

1. When the user hits `'script start'` in the Max patch, it will evoke `./index.js` file, which will boot electron up and also creates a socket server at `localhost:3000` to  enable communication between with the main process and  the renderer process of the app. (Socket.io is not always necessary for this task)  
1. And now let's examine what's going on in the `electron` folder. Suppose you are in `electron` folder, `src/main.js` is the file electron first reads. ***Why?*** Because by default, electron will read the file specified in the `main` property in the `package.json` of that directory.
1. When `src/main.js` is evaluated, it launches a window and reads `src/index.html`. To send/receive data with the Max patch, you'll have to use the Max API. But because Max API is only available in the node process that's evoked by `node.script` in the max patch, you can't `require('max-api')` in your *renderer process*. **Thus we use socket**.  So the data will flow from `renderer process` =>(via socket) `main process` => (via max-api) Max patch.

### References

1. [Node for Max API](https://docs.cycling74.com/nodeformax/api/)

1. [Electron](https://electronjs.org/)

1. [npm-package.json](https://docs.npmjs.com/files/package.json)

1. [Socket.io](https://socket.io/)

## Maintainers

[@yuichkun](https://github.com/yuichkun)

## Contributing

PRs are welcome!

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Yuichi Yogo
