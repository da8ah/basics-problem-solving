/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.

*/

function isValidBracket(sequence: string): boolean {
	const pattern = /^[\(\)\[\]\{\}]+$/;
	if (new RegExp(pattern).test(sequence)) {
		const open = ["(", "[", "{"];
		const close = [")", "]", "}"];
		const brackets: string[] = [];
		let size = 0;
		for (let i = 0; i < sequence.length; i++) {
			if (open.indexOf(sequence[i]) !== -1) {
				brackets[size] = sequence[i];
				size++;
			} else if (close.indexOf(sequence[i]) !== -1) {
				if (size === 0) return false;

				const index = close.indexOf(sequence[i]);
				if (brackets[size - 1] === open[index]) {
					size--;
				} else {
					return false;
				}
			}
		}

		return size === 0;
	}
	return false;
}

console.log(isValidBracket("{()()[]}"));
