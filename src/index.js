import Config from "./config.js";
import MyFeatures from "./libs/features.js";
import MyLog from "./libs/mylog.js";
import MyHandle from "./libs/myhandle.js";
import MyData from "./libs/mydata.js";

MyData.ready = false;
MyData.update = false;
MyData.tick = 0;

window.onload = myinit;

function myinit() {
	MyLog.log("myinit");
	// check device feature for requirement
	if (MyFeatures.check()) {
		mysetup();
	}
}
function mysetup() {
	MyLog.log("mysetup");
	window.addEventListener(
		"deviceorientation",
		function(event) {
			MyHandle.deviceOrientatation(event);
		},
		false
	);
	window.addEventListener(
		"devicemotion",
		function(event) {
			MyHandle.deviceMotion(event);
		},
		false
	);
	mypreload();
}

function mypreload() {
	MyLog.log("mypreload");
	MyData.ready = true;
	mystart();
}
function mystart() {
	MyLog.log("mystart");
	mytick();
}

function mytick() {
	// console.log("tick");
	requestAnimationFrame(mytick);
}

function noluck() {
	alert("noluck");
}