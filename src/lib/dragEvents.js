import getElement from "./getElement";
import makeid from "./makeid";

let dragSourceElement = null;

// onDrag function that sets the element to be dragged
function onDrag(e, type, editableElements) {
    const elementData = getElement(e, type, editableElements);
    const clonedElement = structuredClone(elementData);
    dragSourceElement = e.target;
    e.dataTransfer.setData("element", JSON.stringify(clonedElement));
    e.dataTransfer.setData("oldid", JSON.stringify(e.target.id));
}

// handleHoverOverElement function that handles the hover over an element
function handleHoverOverElement(e) {
    e.preventDefault();

    if (e.target === dragSourceElement) return;

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

// handleHoverOutOfElemenet function that handles the hover out of an element
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
