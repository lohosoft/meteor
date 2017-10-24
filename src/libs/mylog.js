import Config from "../config.js";

function log(info) {
	if (Config.dev) {
		console.log(info);
	}
}

function error(e) {
	if (Config.dev) {
		console.error(e);
	}
}
exports.log = log;
exports.error = error;
