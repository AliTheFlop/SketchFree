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

    if (height <= 40) {
        div.classList.remove("dragover-bottom");
        div.classList.add("dragover-top");
    } else if (height >= 60) {
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

    const findItem = editableElements.find((x) => x.id === div.id);

    // Find Height Of Mouse To Drop Item

    const rect = div.getBoundingClientRect();

    const y = e.clientY - rect.top; // Mouse on Y of rect
    const height = (100 * y) / rect.height; // Mouse Y coords on Rect

    if (height <= 50) {
        setEditableElements((prev) => {
            const index = prev.findIndex(
                (element) => element.id === findItem.id
            );
            const newElements = [...prev];
            newElements.splice(index, 0, data);
            return newElements;
        });
    } else if (height > 50) {
        setEditableElements((prev) => {
            const index = prev.findIndex(
                (element) => element.id === findItem.id
            );
            const newElements = [...prev];
            newElements.splice(index + 1, 0, data);
            return newElements;
        });
    }

    handleHoverOutOfElement(e);
}

function onDrag(e, type) {
    const elementData = {
        id: makeid(7),
        type: type,
    };

    e.dataTransfer.setData("element", JSON.stringify(elementData));
}

module.exports = {
    handleHoverOutOfElement,
    handleHoverOverElement,
    handleOnDropElement,
    onDrag,
};
