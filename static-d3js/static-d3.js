const maxApi = require('max-api');
const fs = require('fs');
const D3Node = require('d3-node');
const svg2png = require('svg2png');

let styleFile = 'style.css';

maxApi.addHandler("style", (file) => {
	styleFile = file;
});


maxApi.addHandler("d3", (inputFile) => {
	const styles = fs.readFileSync(`./data/${styleFile}`);

	var options = {
  		styles,
	};

	var d3n = new D3Node(options);

	const d3 = d3n.d3;

	var margin = {top: 10, right: 30, bottom: 30, left: 30},
  		width = 1920 - margin.left - margin.right,
  		height = 1080 - margin.top - margin.bottom;

	const svgWidth = width + margin.left + margin.right;
	const svgHeight = height + margin.top + margin.bottom;

	var svg = d3n.createSVG(svgWidth, svgHeight);

	require(`./data/${inputFile || 'chart.js'}`)(d3, svg, { width, height, margin });

	var svgBuffer = new Buffer(d3n.svgString(), 'utf-8');
  svg2png(svgBuffer)
		.then(buffer => fs.writeFile(`./data/${inputFile.slice(0, -3)}.png`, buffer, (err) => {
			if (err) throw err;
			maxApi.outlet("filepath", `${__dirname}/data/${inputFile.slice(0, -3)}.png`)
		}))
    .catch(e => console.error('ERR:', e))  

});