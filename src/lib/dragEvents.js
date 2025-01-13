import getElement from "./getElement";
import findItemRecursive from "./recursiveItem";
import { useStore } from "@/state/store.js";

function onDrag(e, type) {
    const elementData = getElement(type, makeid(7));
    e.dataTransfer.setData("element", JSON.stringify(elementData));
}

function makeid(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
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

function handleOnDropElement(e, editableElements, insertElement) {
    e.preventDefault();

    const div = e.target;
    if (!div) return;
    if (!div.id) {
        console.log("No div id!");
        handleHoverOutOfElement(e);
        return;
    }

    const data = JSON.parse(e.dataTransfer.getData("element"));

    const findItem = findItemRecursive(editableElements, div.id);

    // Find Height Of Mouse To Drop Item

    const rect = div.getBoundingClientRect();

    const y = e.clientY - rect.top; // Mouse on Y of rect
    const height = (100 * y) / rect.height; // Mouse Y coords on Rect

    const insertBefore = height <= 50;

    insertElement(findItem.id, data, insertBefore);

    handleHoverOutOfElement(e);
}

module.exports = {
    handleHoverOutOfElement,
    handleHoverOverElement,
    handleOnDropElement,
    onDrag,
};
