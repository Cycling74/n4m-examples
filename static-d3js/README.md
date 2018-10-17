# static-d3js

Generate data visualizations with d3js and render them as PNGs.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files 

`static-d3.maxpat` : The Max patch to run the example.<br />
`static-d3.js` : The launcher JS for the NodeJS script.<br />
`package.json` : The Node package file.<br />
`package-lock.json` : The Node package lock file.<br />
`README.md` : This file!<br />


## Usage

1. Launch the `static-d3.maxpat` Max patch.
2. (First time only...) Click on the [script npm install] message at the lower-right to load the required packages and libraries.
3. Click on the [script start] message at the top-left to start the Node process running.
4. Send a `[d3]` message followed by a valid d3js script file. An example based on Mike Bostock's [grouped bar chart](https://bl.ocks.org/mbostock/3887051) is provided.
