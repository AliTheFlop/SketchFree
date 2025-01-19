import makeid from "./makeid";

function handleFindElement(target, editableElements) {
    let elementFound = null;

    for (let element of editableElements) {
        if (element.id === target.id) {
            elementFound = element;
            break;
        }

        if (element.children && element.children.length > 0) {
            elementFound = handleFindElement(target, element.children);
            if (elementFound) break;
        }
    }

    if (!elementFound) console.log("No element has been found");
    return elementFound;
}

function getElement(e, type, id, editableElements) {
    if (!type) {
        const newElement = handleFindElement(e.target, editableElements);
        const newId = makeid(7);

        newElement.id = newId;
        newElement.class = newId;
        newElement.props.id = newId;
        newElement.props.className = newId;

        return newElement;
    }

    switch (type) {
        case "h1":
            return {
                id: id,
                class: id,
                type: "h1",
                props: {
                    style: {
                        color: "#333",
                        fontSize: "24px",
                        fontWeight: "bold",
                    },
                    className: id,
                    id: id,
                },
                content: "SketchFree",
            };
        case "p":
            return {
                id: id,
                class: id,
                type: "p",
                props: {
                    style: {
                        color: "#333",
                        fontSize: "16px",
                    },
                    className: id,
                    id: id,
                },
                content: "Edit Me!",
            };
        case "div":
            return {
                id: id,
                class: id,
                type: "div",
                props: {
                    style: {
                        color: "#333",
                        border: "1px solid gray",
                        width: "200px",
                        height: "200px",
                    },
                    className: id,
                    id: id,
                },
                children: [],
                content: null,
            };
        case "button":
            return {
                id: id,
                class: id,
                type: "button",
                props: {
                    style: {
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(0, 122, 255)",
                    },
                    className: id,
                    id: id,
                },
                content: "Edit Me!",
            };
        default:
            return {
                id: id,
                class: id,
                type: "p",
                props: {
                    style: {
                        color: "#333",
                        fontSize: "16px",
                    },
                    className: id,
                    id: id,
                },
                content: "Edit Me!",
            };
    }
}

module.exports = getElement;
