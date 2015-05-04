var fs = require('fs'),
	path = require('path'),
	dir_path = process.argv[2],
	extension = process.argv[3];

fs.readdir(dir_path, function(err, list) {
	if (err) throw err;

	list.forEach(function (file) {
		if (path.extname(file) === '.' + extension) {
			console.log(file);
		}
	});
});