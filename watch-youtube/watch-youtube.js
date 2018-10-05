const maxApi = require("max-api");
const ytdl = require('ytdl-core');

maxApi.addHandler("open", (url) => {
	ytdl.getInfo(url)
    .then(info => {
      let format = ytdl.chooseFormat(info.formats, {});
      maxApi.outlet("download_url", format.url);
    })
    .catch(() => {
      maxApi.post(`Error fetching video: ${url}`)
    })
});