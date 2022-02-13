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

function decOfTime(number, type) {
	const decCases = [2, 0, 1, 1, 1, 2];
	const types = {
		hours: ['час', 'часа', 'часов'],
		minutes: ['минута', 'минуты', 'минут'],
		seconds: ['секунда', 'секунды', 'секунд']
	};
  
    return types[type][number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)]];
}

const getDayWeek = function (date) {
	return days[date.getDay()];
};

const getMonth = function (date) {
	return months[date.getMonth()];
};

const app = function () {
	setInterval(function () {
		const date = new Date();
		showTime1.innerText = 'Сегодня ' + getDayWeek(date) + ', ' + date.getDate() + ' ' + declinationMonths(getMonth(date)) + ' ' + date.getFullYear() + ' года, ' +
			addZerro(date.getHours()) + ' ' + decOfTime(date.getHours(), 'hours') + ' ' + addZerro(date.getMinutes()) + ' ' + decOfTime(date.getMinutes(), 'minutes') +
			' ' + addZerro(date.getSeconds()) + ' ' + decOfTime(date.getSeconds(), 'seconds');
		showTime2.innerText = date.toLocaleDateString('ru') + ' - ' + date.toLocaleTimeString('ru');

	}, 1000);

};

app();