var jsdom = require('jsdom');
var fs = require('fs');
var html = fs.readFileSync('./index.html', 'utf8');

jsdom.env(html, ['https://code.jquery.com/jquery-1.9.1.min.js'], function (err, window) {
	var form = window.$('form');
	var button = form.find('button');
	var submited = false;
	var clicked = false;

	button.on('click', function () {
		clicked = true;
	})
	form.on('submit', function () {
		submited = true;
	});

	button.click();
	console.log('submited: %s, clicked: %s', submited, clicked);
});
