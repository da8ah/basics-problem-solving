/* 
Two digit number Sum

Number 0 <= n <= 99 
*/

function solution(n: number): number {
	if (n >= 10 && n <= 99) {
		return Number(n.toString()[0]) + Number(n.toString()[1]);
	}
	return NaN;
}

console.log(solution(11));
