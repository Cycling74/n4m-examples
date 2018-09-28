# file-upload 

Handle an uploaded audio file.

Note: Before you run this example, make sure that you run the npm install embedded into the patcher file, by clicking on the [script npm install] message.

***

## Files 

`file-upload.maxpat` : The Max patch to run the example.<br />
`file-upload.js` : The launcher JS for the NodeJS script.<br />
`app.js` : The NodeJS/Express script that runs the application.<br />
`package.json` : The Node package file.<br />
`README.md` : This file!<br />

## Folders

`/public` : The browser-facing content served up by Node.<br />
`/routes` : The Express routing functions for each endpoint.<br />
`/views` : The HTML/EJS templates used by the routing functions.<br />

***

## Usage

1. Launch the `file-upload.maxpat` Max patch.
2. (First time only...) Click on the [script npm install] message at the lower-right to load the required packages and libraries.
3. Click on the [script start] message at the top-left to start the Node process running.
4. Launch a browser, and type in the URL "localhost:3000". You should see a file upload form.
5. Select an audio file and upload it. You should hear it play from the patch. If you do not hear the file play, check the Max window for any errors.

Note: The files are moved to a folder named "_filesin" inside the package folder, and are not deleted after they are played. You may wish to occasionally clear out that folder if you use this patch a lot!
