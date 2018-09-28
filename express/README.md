# express

An example of a small express application.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files

`express.maxproj` : The Max project for the example.<br />
`patchers/express.maxpat` : The Max patch to run the example.<br />
`express-node/package.json` : The Node package file.<br />
`express-node/server.js` : The NodeJS/Express script that runs the application.<br />

## Folders

`/patchers` : All Max patches for this example.
`/express-node` : All files needed for the Express server.

***

## Usage

1. Launch the `express.maxproj` Max project.
2. (First time only...) Click on the [script npm install] message at the upper-left to load the required packages and libraries.
3. Click on the [script start] message at the lower-left to start the Node process running.
4. In the [jweb] object in the Max patch, you will see a website served by the Express application. 
5. You can move the [slider] and see the slider value being sent to the Express application.
