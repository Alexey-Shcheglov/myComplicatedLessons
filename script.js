'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; // создали массив
const myWeek = document.getElementById('myWeek'); // получили элемент по ID
const day = new Date();


week.forEach(function(i) {
	if (i == 'Суббота' || i == 'Воскресенье') {
		if (week[day.getDay()] == i ) {
			myWeek.innerHTML += `<b>${i.italics()}</b></br>`;
		} else {
			myWeek.innerHTML += `${i.italics()}</br>`;
		}
	} else if (week[day.getDay()] == i) {
		myWeek.innerHTML += `<b>${i}</b></br>`;
	} else {
		myWeek.innerHTML += i + '</br>';
	}
})

