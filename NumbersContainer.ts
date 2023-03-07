/*
Scenario
Your task is to implement a simple container of integer numbers. You are given some template code in the Container class within the container.ts file. You should implement any empty methods of this class, which correspond to the operations described below.

Unit tests are already implemented in the basicTests.ts and containerTests.ts files, so feel free to open them and get familiar with the details. Note that these unit tests use the mocha framework. To run these tests, you can use the following options associated with the RUN button located on the bottom right corner:

Operations
The program starts with an empty container.

ADD <value> should add the specified integer value to the container.

DELETE <value> should attempt to remove the specified integer value from the container. If the value is present in the container, remove it and return true, otherwise, return false.

GET_MEDIAN should return the median integer - the integer value in the middle of the sequence after all integer value stored in the container are sorted from smallest to largest. If the length of the sequence is even, the leftmost integer from the two middle integers should be returned. If the container is empty, this method should raise a runtime exception.

[execution time limit] 6 seconds
*/

/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
	private arr: number[] | null = null;

	constructor() {}

	/**
	 * Adds the specified value to the container
	 */
	add(value: number): void {
		// TODO: implement this method
		if (!this.arr) this.arr = [];
		value = Math.round(value);
		this.arr.push(value);
	}

	/**
	 * Attempts to delete one item of the specified value from the container
	 *
	 * @return {boolean} true, if the value has been deleted, or
	 *                   false, otherwise.
	 */
	delete(value: number): boolean {
		// TODO: implement this method
		if (!this.arr) return false;

		value = Math.round(value);
		const index = this.arr.indexOf(value);

		if (index === -1) return false;

		if (this.arr.length === 1) {
			this.arr = null;
			return true;
		}

		this.arr.splice(index, 1);
		return true;
	}

	/**
	 * Finds the container's median integer value, which is
	 * the middle integer when the all integers are sorted in order.
	 * If the sorted array has an even length,
	 * the leftmost integer between the two middle
	 * integers should be considered as the median.
	 *
	 * @return {number} the median if the array is not empty, or
	 * @throws {Error} a runtime exception, otherwise.
	 */
	getMedian(): number {
		// TODO: implement this method
		if (!this.arr) return -1;
		//throw Error("Runtime Exception");

		const sorted = [...this.arr].sort((a, b) => (a < b ? -1 : 1));
		let index: number = Math.round(sorted.length / 2) - 1;
		return sorted[index];
	}
}

export default Container;

// Tests
let container = new Container();
container.add(1);
container.add(2);
container.add(5);
container.add(4);

console.log(container.getMedian());
console.log(container);
console.log(container.delete(1));
console.log(container);
console.log(container.getMedian());

// container = new Container();
// container.add(5);
// container.add(3);
// container.add(5);
// console.log(container);
// console.log(container.getMedian());
// console.log(container.delete(5));
// console.log(container.delete(5));
// console.log(container.delete(5));
// console.log(container);
// console.log(container.getMedian());
// console.log(container.delete(2));
// console.log(container.delete(3));
// console.log(container);
// console.log(container.getMedian());

// container = new Container();
// container.add(1);
// container.add(1);
// container.add(2);
// container.add(2);
// container.add(2);
// console.log(container);
// console.log(container.getMedian());
// console.log(container.delete(2));
// console.log(container);
// console.log(container.getMedian());
// console.log(container.delete(1));
// console.log(container);
// console.log(container.getMedian());

// console.log(container.delete(4));
// // console.log(container);
// console.log(container.getMedian());
// for (let i = 10; i >= 1; --i) {
// 	container.add(i);
// }
// // console.log(container);
// console.log(container.getMedian());
// for (let i = 4; i <= 6; ++i) {
// 	container.delete(i);
// }
// // console.log(container);
// console.log(container.getMedian());
