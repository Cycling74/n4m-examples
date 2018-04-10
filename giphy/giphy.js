// Simple wrapper for the giphy API, which lets you download giphy gifs to Max

// Begin loading modules

const Max = require('max-api');

let dotenv_module;
try {
    dotenv_module = require('dotenv');
    dotenv_module.config();
} catch (e) {
    Max.error(e);
    Max.error("Could not load the dotenv module. Please be sure to send the message 'script npm install' to the node.script object to download node modules");
    process.exit(1);
}

if (!process.env.GIPHY_API_KEY) {
    Max.error("No value for key GIPHY_API_KEY in .env file. Please make sure to create a file called .env with a GIPHY API key.");
    process.exit(1);
}

const giphy = require('giphy-api')(process.env.GIPHY_API_KEY);

function trimPreview(previewFilename) {
    return previewFilename.replace("-preview", "");
}

// Declare handlers

Max.addHandlers({
    random: (tag) => {
        giphy.random(tag).then((res) => {
            const preview_file = Max.outlet(res.data.images.preview.mp4);
            const filename = trimPreview(preview_file);
            Max.outlet(["url", filename]);
        });
    },

    trending: () => {
        giphy.trending({
            limit: 25,
            rating: 'pg',
            fmt: 'json'
        }).then((res) => {
            const idx = Math.floor(Math.random() * 25);
            const preview_file = res.data[idx].images.preview.mp4;
            const filename = trimPreview(preview_file);
            Max.outlet(["url", filename]);
        });
    }
});
