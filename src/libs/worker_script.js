"use strict";
init();
function init() {}
self.onmessage = function(e) {
	let data = e.data;
	self.postMessage({ type: data.type, payload: data.payload });
};