const num = 266219;
const str = num.toString();

const arr = str.split('');

let result = 1;

for (let i=0; i < arr.length; i++) {
	result = result * Number(arr[i]);
}

result = result ** 3;

result = result.toString().slice(0, 2);



console.log(result);
