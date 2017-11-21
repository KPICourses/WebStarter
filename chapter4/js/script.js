'use strict';
// alert('Hello World!');
const calc = function (a, b) {
	const result = document.getElementById('result');
	for (let i = 0; i < 1000; i++) {
		a += b;
	}

	result.innerHTML += a;
};

const openUrl = function () {
	document.location.href = "https://google.com";
};

const changeVisible = function () {
	const block = document.getElementById('block');
	if (block.style.opacity === '0') {
		block.style.opacity = '1';
	} else {
		block.style.opacity = '0';
	}
};