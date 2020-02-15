//Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
	for (let a = 0; a < arr.length; a++) {
		for (let b = 0; b < arr[a].length; b++) {
			product *= arr[a][b];
		}
	}
	// Only change code above this line
	return product;
}

// Modify values below to test your code
multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7]
]);

//Recursive operations
// array input

const arraySum = arr => {
	while (arr.length > 1) {
		return arr.pop() + arraySum(arr);
	}
	return arr[0];
};

// from nums 1-10
const numSum = num => {
	while (num > 1) {
		return num + numSum(num - 1);
	}
	return 1;
};

// index 0 - 9 or 10th position
const numSum = pos => {
	while (pos > 1) {
		return --pos + numSum(pos);
	}
	return 0;
};

//Fibonacci
const fib = num => {
	while (num > 1) {
		return fib(num - 1) + fib(num - 2);
	}
	return num;
};
