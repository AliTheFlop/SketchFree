import getElement from "./getElement";
import findItemRecursive from "./recursiveItem";

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

function handleOnDropElement(e, editableElements, setEditableElements) {
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

    function updateNestedElements(elements, targetId, insertBefore) {
        return elements
            .map((element) => {
                // If this is the target element
                if (element.id === targetId) {
                    return insertBefore ? [data, element] : [element, data];
                }

                // If this element has children, recursively search them
                if (element.children && element.children.length > 0) {
                    return {
                        ...element,
                        children: updateNestedElements(
                            element.children,
                            targetId,
                            insertBefore
                        ),
                    };
                }

                return element;
            })
            .flat();
    }

    setEditableElements((prev) => {
        // If dropping above element (height <= 50)
        if (height <= 50) {
            return updateNestedElements(prev, findItem.id, true);
        }
        // If dropping below element (height > 50)
        else {
            return updateNestedElements(prev, findItem.id, false);
        }
    });

    handleHoverOutOfElement(e);
}

module.exports = {
    handleHoverOutOfElement,
    handleHoverOverElement,
    handleOnDropElement,
    onDrag,
};
