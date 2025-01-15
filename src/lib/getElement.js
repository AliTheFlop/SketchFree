function getElement(type, id) {
    switch (type) {
        case "h1":
            return {
                id: id,
                type: "h1",
                props: {
                    style: {
                        color: "#333",
                        fontSize: "24px",
                        fontWeight: "bold",
                    },

                    id: id,
                },
                content: "SketchFree",
            };
        case "p":
            return {
                id: id,
                type: "p",
                props: {
                    style: {
                        color: "#333",
                        fontSize: "16px",
                    },

                    id: id,
                },
                content: "Edit Me!",
            };
        case "div":
            return {
                id: id,
                type: "div",
                props: {
                    style: {
                        color: "#333",
                        border: "1px solid gray",
                        width: "200px",
                        height: "200px",
                    },

                    id: id,
                },
                children: [],
                content: null,
            };
        case "button":
            return {
                id: id,
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

                    id: id,
                },
                content: "Edit Me!",
            };
    }
}

module.exports = getElement;
