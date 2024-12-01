const carriers = [
	['dapelu', 5, ['midu', 'jelowing']],
	['midu', 2, []],
	['jelowing', 2, []],
];

const carriers2 = [
	['lolivier', 8, ['camila', 'jesuspoleo']],
	['camila', 5, ['sergiomartinez', 'conchaasensio']],
	['jesuspoleo', 4, []],
	['sergiomartinez', 4, []],
	['conchaasensio', 3, ['facundocapua', 'faviola']],
	['facundocapua', 2, []],
	['faviola', 1, []],
];

const countPackages = (carriers, carrierID) => {
	const [, getPackages, subordinates] = carriers.find(([id]) => carrierID === id);
	return subordinates.reduce(
		(sumPackages, id) => sumPackages + countPackages(carriers, id),
		getPackages
	);
};

console.log(countPackages(carriers, 'dapelu'));
console.log(countPackages(carriers2, 'camila'));

console.log(
	countPackages(
		[
			['dapelu', 5, []],
			['midu', 2, ['dapelu']],
		],
		'midu'
	)
);
