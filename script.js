// задача 1

const lang = prompt('Ввести язык!', 'ru или en');
let arr;

// Только с использованием if



if (lang == 'ru') {
	console.log(arr = ['Понедельник', 'Втотник', 'Среда', 'Четверг', 'Рятница', 'Суббота', 'Воскресенье']);
} 
if (lang == 'en') {
	console.log(arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
}

// с использованием switch-case

switch (lang) {
	case 'ru':
		arr = ['Понедельник', 'Втотник', 'Среда', 'Четверг', 'Рятница', 'Суббота', 'Воскресенье'];
	break;
	case 'en':
		arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	break;
}
console.log(arr);

// Многомерный массив без if и switch

arr = {
	'ru': ['Понедельник', 'Втотник', 'Среда', 'Четверг', 'Рятница', 'Суббота', 'Воскресенье'],
	'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

};

console.log(arr[lang]);









// задача 2
const namePerson = prompt('Введите имя', 'Только имя');


let status = (namePerson == 'Артем')  ? console.log('Директор') : (namePerson == 'Александр') ? console.log('Преподаватель') : console.log('Студент');

