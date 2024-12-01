const canReconfigure = (from, to) => {
	if (from.length !== to.length) return false;
	let keysFrom = {};
	let reconfigure = true;
	for (let gift = 0; gift < from.length; gift++) {
		if (!(from[gift] in keysFrom) && !(to[gift] in keysFrom)) {
			keysFrom[from[gift]] = to[gift];
			keysFrom[to[gift]] = from[gift];
		} else if (keysFrom[from[gift]] !== to[gift] || keysFrom[to[gift]] !== from[gift]) {
			reconfigure = false;
			break;
		}
	}
	return reconfigure;
};

console.log(canReconfigure('BAL', 'LIB'));
console.log(canReconfigure('CON', 'JUU'));
console.log(canReconfigure('XBOX', 'XXBO'));
console.log(canReconfigure('XBOX', 'XOBX'));
console.log(canReconfigure('MMM', 'MID'));
console.log(canReconfigure('AA', 'MID'));
