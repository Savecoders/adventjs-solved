const fixFiles = (files) => {
	const modNameFiles = {};
	const fix = files.map((file) => {
		modNameFiles[file] = (modNameFiles[file] ?? 0) + 1;
		file = modNameFiles[file] === 1 ? file : `${file}(${modNameFiles[file] - 1})`;
		return file;
	});
	return fix;
};

const files2 = ['file', 'file', 'file', 'game', 'game'];

console.log(fixFiles(files2));
