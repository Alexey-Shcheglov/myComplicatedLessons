'use strict';

const showTime1 = document.getElementById('ShowTime1');
const showTime2 = document.getElementById('ShowTime2');

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


const addZerro = function (num) {
	return num > 10 ? num : '0' + num;
};

const declinationMonths = function (str) {
	if (str === "Март" || str === "Август") {
		return str + "а";
	} else {
		return str.slice(0, -1) + "я";
	}
};

const declinationHours = function (num) {
	if (num == 1 || num == 21) {
		return "час";
	} else if (num >= 2 && num <= 4 || num >= 22 && num <= 24) {
		return "часа";
	} else {
		return "часов";
	}
};

const declinatinMinutes = function (num) {
	if (num % 10 === 1) {
		return 'минута';
	} else if (num % 10 === 2 ||num % 10 === 3 ||num % 10 ===4 ) {
		return 'минуты';
	} else {
		return 'минут';
	}
};

const declinationSeconds = function (num) {
	if (num % 10 === 1) {
		return 'секунда';
	} else if (num % 10 === 2 ||num % 10 === 3 ||num % 10 === 4) {
		return 'секунды';
	} else {
		return 'секунд';
	}
};


const getDayWeek = function (date) {
	return days[date.getDay()];
};

const getMonth = function (date) {
	return months[date.getMonth()];
};

const app = function () {
	setInterval(function() {
		const date = new Date();
		showTime1.innerText = 'Сегодня ' + getDayWeek(date) + ', ' + date.getDate() + ' ' + declinationMonths(getMonth(date)) + ' ' + date.getFullYear() + ' года, '
			+ addZerro(date.getHours()) + ' ' + declinationHours(date.getHours()) + ' ' + addZerro(date.getMinutes()) + ' ' + declinatinMinutes(date.getMinutes())
			+ ' ' + addZerro(date.getSeconds()) + ' ' + declinationSeconds(date.getSeconds()); 
		}, 1000);
		showTime2.innerText = date.toLocaleDateString('ru') + ' - ' + date.toLocaleTimeString('ru');
		
};


app();



