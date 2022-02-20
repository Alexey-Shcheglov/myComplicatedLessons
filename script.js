'use strict';
//  основное задание

const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height + 'px';
	this.width = width + 'px';
	this.bg = bg;
	this.fontSize = fontSize + 'px';
	this.createElement = () => {
		let elem;
		if (this.selector.trim()[0] === ".") {
			 elem = document.createElement('div');
			 elem.classList.add(`${selector.slice(1)}`);
		} else if (this.selector.trim()[0] === "#") {
			 elem = document.createElement('p');
			 elem.setAttribute("id", `${selector.slice(1)}`);
		}

		document.body.append(elem);
		elem.innerText = 'Создан элемент, причину пояснять не буду';
		elem.style.cssText=`height: ${height  + 'px'};
			width: ${width  + 'px'};
			background-color: ${bg};
			font-size : ${fontSize  + 'px'}; `;
  };
 };

 let elem = new DomElement('.block', '200', '200', 'blue', '22');
 elem.createElement();


