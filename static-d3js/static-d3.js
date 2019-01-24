const maxApi = require("max-api");
const fs = require("fs");
const path = require("path");
const Buffer = require("safe-buffer").Buffer;
const D3Node = require("d3-node");
const svg2png = require("svg2png");
const promisify = require("util").promisify;
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

let styleFile = "style.css";

maxApi.addHandler("style", (file) => {
	styleFile = file;
});

maxApi.addHandler("d3",  async (inputFile) => {
	const styles = await readFileAsync(`./data/${styleFile}`);

	var options = {
		styles
	};

	var d3n = new D3Node(options);

	const d3 = d3n.d3;

	var margin = {top: 10, right: 30, bottom: 30, left: 30};

	var width = 1920 - margin.left - margin.right;
	var height = 1080 - margin.top - margin.bottom;

	const svgWidth = width + margin.left + margin.right;
	const svgHeight = height + margin.top + margin.bottom;

	var svg = d3n.createSVG(svgWidth, svgHeight);

	const inputPath = "./" + path.join("data", inputFile || "chart.js");
	require(inputPath)(d3, svg, { width, height, margin });

	var svgBuffer = Buffer.from(d3n.svgString(), "utf-8");
	const buffer = await svg2png(svgBuffer);
	try {
		const outputFile = `${inputFile.slice(0, -3)}.png`;
		await writeFileAsync(path.join("data", outputFile), buffer);
		await maxApi.outlet("filepath", path.join(__dirname, "data", outputFile));
	} catch (e) {
		console.error("ERR:", e);
	}
});
