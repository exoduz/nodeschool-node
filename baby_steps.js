var arguments = process.argv,
	result = 0;

for (i = 2; i < arguments.length; i++) {
	result += Number(arguments[i]);
}

console.log(result);