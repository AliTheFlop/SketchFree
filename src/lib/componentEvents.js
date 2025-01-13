import { handleHoverOutOfElement } from "./dragEvents";
import findItemRecursive from "./recursiveItem";

// Add component
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

module.exports = handleOnDropElement;
