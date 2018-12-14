var arr = ["one","two","three","four"]

function pusher(arr) {
	var arr2 = [];
	arr2.push(arr.concat());
	return String(arr2);
};

module.exports = {
    arr, pusher
}