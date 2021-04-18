export default new function () {

    /**
     * составной объект для хранения информации о переносе:
     * {
     *   elem - элемент, на котором была зажата мышь
     *   card - карточка
     *   downX/downY - координаты, на которых был mousedown
     *   shiftX/shiftY - относительный сдвиг курсора от угла элемента
     * }
     */

    let dragObject = {};

    function onMouseDown(e) {
        if (e.which !== 1) return;

        let elem = e.target.closest('.draggable');

        if (!elem) return;

        dragObject.elem = elem;
        // запомним, что элемент нажат на текущих координатах pageX/pageY
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
        // элемент не зажат
        if (!dragObject.elem) return;

        // если перенос не начат...
        if (!dragObject.card) {
            let moveX = e.pageX - dragObject.downX;
            let moveY = e.pageY - dragObject.downY;

            // если мышь передвинулась в нажатом состоянии недостаточно далеко
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }

            // начинаем перенос, создать карту
            dragObject.card = createCard(e);

            // отмена переноса, нельзя "захватить" за эту часть элемента
            if (!dragObject.card) {
                dragObject = {};
                return;
            }

            // карта создана успешно
            // создать вспомогательные свойства shiftX/shiftY
            let coords = getCoords(dragObject.card);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            // отобразить начало переноса
            startDrag(e);
        }

        // отобразить перенос объекта при каждом движении мыши
        dragObject.card.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.card.style.top = e.pageY - dragObject.shiftY + 'px';

        // следим за переносом карты, перемещая тень при необходимости
        let droppable = findDroppable(e);

        // если курсор в нутри окна
        if (droppable !== null) {
            let holder = droppable.querySelector(".cards_holder__cards")

            // скрыть переносимый элемент
            dragObject.card.hidden = true;

            // получить самый вложенный элемент под курсором мыши
            let elem = document.elementFromPoint(e.clientX, e.clientY);

            // показать переносимый элемент обратно
            dragObject.card.hidden = false;

            if (holder.contains(elem) && holder !== elem) {
                if (getCoords(elem).top + elem.clientHeight / 2 > e.clientY) {
                    holder.insertBefore(dragObject.shadowElement, elem)
                } else {
                    holder.insertBefore(dragObject.shadowElement, elem.nextSibling)
                }
            } else if (getCoords(holder).top >= e.clientY) {
                holder.insertBefore(dragObject.shadowElement, holder.firstChild)
            } else if (getCoords(holder).bottom < e.clientY) {
                holder.appendChild(dragObject.shadowElement)
            }
        }

        return false;
    }

    function onMouseUp(e) {
        // если перенос идет
        if (dragObject.card) {
            finishDrag();
        }

        // перенос либо не начинался, либо завершился
        // в любом случае очистим "состояние переноса" dragObject
        dragObject = {};
    }

    function createCard() {
        // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
        let card = dragObject.elem;

        let old = {
            position: card.position || '',
            left: card.left || '',
            top: card.top || '',
            zIndex: card.zIndex || ''
        };

        // создать тень для карты
        let shadowElement = document.createElement("div")
        shadowElement.classList.add('card_shadow')
        dragObject.shadowElement = shadowElement;

        // функция для отмены стилей переноса
        card.rollbackStyle = function () {
            card.style.position = old.position;
            card.style.left = old.left;
            card.style.top = old.top;
            card.style.zIndex = old.zIndex
        };

        return card;
    }

    function startDrag() {
        let card = dragObject.card;

        // инициировать начало переноса
        document.body.appendChild(card);
        card.style.zIndex = 9999;
        card.style.position = 'absolute';
    }

    function finishDrag() {
        // заменяем тень карточкой
        dragObject.shadowElement.replaceWith(dragObject.card)
        dragObject.card.rollbackStyle()
    }

    function findDroppable(event) {
        // спрячем переносимый элемент
        dragObject.card.hidden = true;

        // получить самый вложенный элемент под курсором мыши
        let elem = document.elementFromPoint(event.clientX, event.clientY);

        // показать переносимый элемент обратно
        dragObject.card.hidden = false;

        if (elem == null) {
            // такое возможно, если курсор мыши "вылетел" за границу окна
            return null;
        }

        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;
};


function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        bottom: box.bottom + pageYOffset
    };

}