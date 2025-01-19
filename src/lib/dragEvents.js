import getElement from "./getElement";
import makeid from "./makeid";

// Set element to insert into dataTransfer when drag starts
function onDrag(e, type, editableElements) {
    const elementData = getElement(e, type, makeid(7), editableElements);
    e.dataTransfer.setData("element", JSON.stringify(elementData));
}

function handleHoverOverElement(e) {
    e.preventDefault();
    const div = document.elementFromPoint(e.clientX, e.clientY);
    if (!div) return;

    const rect = div.getBoundingClientRect();

    const y = e.clientY - rect.top; // Mouse on Y of rect
    const height = (100 * y) / rect.height; // Mouse Y coords on Rect

    if (height <= 50) {
        div.classList.remove("dragover-bottom");
        div.classList.add("dragover-top");
    } else if (height > 50) {
        div.classList.remove("dragover-top");
        div.classList.add("dragover-bottom");
    }
}

function handleHoverOutOfElement(e) {
    e.preventDefault();
    const div = e.target;
    if (!div) return;
    div.classList.remove("dragover");
    div.classList.remove("dragover-top");
    div.classList.remove("dragover-bottom");
}

module.exports = {
    handleHoverOutOfElement,
    handleHoverOverElement,
    onDrag,
    makeid,
};
