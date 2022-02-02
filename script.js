'use strict';


const arr = ['25', '327', '411', '85', '222', '43', '121'];

for (let i = 0; i < 7; i++) {
	if(arr[i].startsWith(2) || arr[i].startsWith(4)) {
		console.log(arr[i]);
	}
}



nextPrime:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log(`Делители числа ${i} : 1 и ${i}`); 
}