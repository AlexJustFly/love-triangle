/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;
	let arr = preferences;

	for (let i = 0; i < arr.length; i++) {
		var k = arr[i];
		var n = i+1;
		var m = arr[k-1];
		if (arr[m-1]==n && m!=n) {count+=1;}
	}
	count/=3;
	return count;
};
