const checkIsSameTree = (treeA, treeB) =>
	treeA === treeB
		? true
		: treeA.value !== treeB.value
		? false
		: checkIsSameTree(treeA.left, treeB.left) &&
		  checkIsSameTree(treeA.right, treeB.right);

/* function flatten(arr1) {
	return arr1.reduce(
		(acc, val) => (Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)),
		[]
	);
}
const checkIsSameTree = (treeA, treeB) => {
	const FirstTree = flatten(countDecorations(treeA));
	const SecondTree = flatten(countDecorations(treeB));
	if (FirstTree.length !== SecondTree.length) return false;
	let equealTrees = true;
	for (let lef = 0; lef < FirstTree.length; lef++) {
		if (FirstTree[lef] !== SecondTree[lef]) {
			equealTrees = false;
			break;
		}
	}
	return equealTrees;
}; */
const tree = {
	value: 1,
	left: { value: 2, left: null, right: null },
	right: { value: 3, left: null, right: null },
};
const tree2 = {
	value: 1,
	left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
	right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};
console.log(checkIsSameTree(tree, tree));
console.log(checkIsSameTree(tree2, tree2));
console.log(checkIsSameTree(tree, tree2));
