var filterFn = require('./make_it_modular_ls'),
	dir = process.argv[2],
	extension = process.argv[3];

filterFn(dir, extension, function (err, list) {
	if (err)
		return console.error('There was an error:', err);

	list.forEach(function (file) {
		console.log(file);
	});
});