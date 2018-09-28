# cors-service

Provide a CORS-Capable service.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files

`cors-service.maxpat` : The Max patch to run the example.<br />
`cors-service.js` : The launcher JS for the NodeJS script.<br />
`app.js` : The NodeJS/Express script that runs the application.<br /><br />
`testpage.html` : A web page used to test the service.<br />
`package.json` : The Node package file.<br />
`README.md` : This file!<br />

## Folders

`/public` : The browser-facing content served up by Node.<br />
`/routes` : The Express routing functions for endpoints.<br />
`/views` : The HTML/EJS templates used by the routing function.<br />

***

## Usage

1. Launch the `cors-service.maxpat` Max patch.
2. (First time only...) Click on the [script npm install] message at the top-left to load the required packages and libraries.
3. Click on the [script start] message at the top-left to start the Node process running.
4. Click on the "Open the test page" message to launch a browser window with the example HTML page. Click on the button on that page to send a random number to the Max patch, and have it return a variety of Max-generated information.
