'use strict';
let elem;

function DomElement (selector, height, width, bg, position, left, top) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position = position;
    this.left = left;
    this.top = top;
    this.createElement = function () {
        if (element.selector.trim()[0] === ".") {
            elem = document.createElement('div');
            elem.classList.add(`${selector.slice(1)}`);
        } else if (element.selector.trim()[0] === "#") {
            elem = document.createElement('p');
            elem.setAttribute("id", `${selector.slice(1)}`);
        }

        document.body.append(elem);
        elem.innerText = ""
        elem.style.cssText=`height: ${height  + 'px'};
                width: ${width  + 'px'};
                background-color: ${bg};
                position: ${position};
                top: ${top + 'px'};
                left: ${left + 'px'}; `;
        return elem;
    };


    this.keyDown = function () {
        switch (event.key) {
            case "ArrowLeft":
                elem.style.left = (+elem.style.left.slice(0, -2) + -10) + "px";
                break;
            case 'ArrowRight':
                elem.style.left = (+elem.style.left.slice(0, -2) + (+10)) + "px";
                break;
            case "ArrowDown":
                elem.style.top = (+elem.style.top.slice(0, -2) + (+10)) + "px";

                break;
            case "ArrowUp":
                elem.style.top = (+elem.style.top.slice(0, -2) - +10) + "px";
                break;
        }
    };

}

let element = new DomElement('.block', '100', '100', 'blue', 'absolute', '900', '400');

document.addEventListener("DOMContentLoaded", element.createElement);
document.addEventListener("keydown", element.keyDown);