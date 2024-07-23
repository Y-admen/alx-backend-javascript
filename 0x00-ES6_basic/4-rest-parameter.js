export default function returnHowManyArguments(...args) {
	let arg_count = 0;
	for (let arg of args) {
		arg_count++;
	}
	return arg_count;
}
