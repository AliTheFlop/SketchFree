import { handleHoverOutOfElement } from "./dragEvents";
import findItemRecursive from "./recursiveItem";
import { isContainer } from "@/components/ElementStyles";

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

    // Get data to insert after dropping
    const data = JSON.parse(e.dataTransfer.getData("element"));

    // Find item to drop before / after
    const findItem = findItemRecursive(editableElements, div.id);

    // Find Height Of Mouse To Drop Item

    const rect = div.getBoundingClientRect();

    const y = e.clientY - rect.top; // Mouse on Y of rect
    const height = (100 * y) / rect.height; // Mouse Y coords on Rect

    const insertBefore = height <= 50;

    if (isContainer(div.tagName)) {
        const insertInsideAbove = height <= 50 && height >= 15;
        const insertInsideBelow = height >= 51 && height <= 85;

        insertElement(
            findItem.id,
            data,
            insertBefore,
            insertInsideAbove,
            insertInsideBelow
        );
    } else {
        insertElement(findItem.id, data, insertBefore, false, false);
    }

    handleHoverOutOfElement(e);
}

module.exports = handleOnDropElement;
