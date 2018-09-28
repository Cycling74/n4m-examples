# max_socket

Realtime data transfer to the browser.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files

`max_sockets.maxpat` : The Max patch to run the example.<br />
`max_sockets.js` : The NodeJS script.<br />
`package.json` : The Node package file.<br />
`README.md` : This file!<br />

## Folders

`/public` : The browser-facing content served up by Node.<br />
`/routes` : The Express routing functions for each endpoint.<br />
`/views` : The HTML/EJS templates used by the routing functions.<br />

***

## Usage

1. Launch the `max_sockets.maxpat` Max patch.
2. (First time only...) Click on the [script npm install] message to load the required packages and libraries.
3. Click on the [script start] message to start the Node process running.
4. Click on the toggle to begin generating live data.
5. Click on the "Open test page" message to launch a browser to the test form. The graphics will show the results of the data feed from the Max patch.
