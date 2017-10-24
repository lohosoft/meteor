import Config from "../config.js";
import MyLog from "./mylog.js";
function polyfill() {
	// request animation frame
	if (!window.requestAnimationFrame) {
		MyLog.log("do request animation frame polyfill");
		window.requestAnimationFrame = (function() {
			return (
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(
					/* function FrameRequestCallback */ callback,
					/* DOMElement Element */ element
				) {
					window.setTimeout(callback, 1000 / 60);
				}
			);
		})();
	}
}

function check() {
	// read device feature requirement from config.js

	if (Config.deviceorientation) {
		return window.DeviceOrientationEvent
			? true
			: new Error("not support deviceorientation");
	}
	if (Config.devicemotion) {
		return window.DeviceMotion
			? true
			: new Error("not support devicemotion");
	}

	return true;
}
polyfill();
exports.check = check;
