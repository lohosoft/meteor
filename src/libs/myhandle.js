import MyData from "./mydata.js";
import MyWorker from "./worker.js";

function deviceOrientatation(event) {
	if (MyData.update) {
		MyData.a = event.alpha;
		MyData.b = event.beta;
		MyData.g = event.gamma;
	}
}

function deviceMotion(event) {
	if (MyData.update) {
		MyData.x = event.acceleration.x;
		MyData.y = event.acceleration.y;
		MyData.z = event.acceleration.z;

		// var ralpha = event.rotationRate.alpha;
		// var rbeta = event.rotationRate.beta;
		// var rgamma = event.rotationRate.gamma;
		// var interval = event.interval;
	}
}
exports.deviceOrientatation = deviceOrientatation;
exports.deviceMotion = deviceMotion;
