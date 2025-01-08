import React from "react";

// If we get a element with no children, it's rendered here

export default function RenderElement({
    type,
    content,
    isContainer,
    children,
    ...props
}) {
    if (!content) console.log("No content provided");

    if (isContainer) {
        console.log(children);
    } else {
        switch (type) {
            case "h1" || "h2" || "h3" || "h4" || "h5" || "h6":
                return React.createElement(type, props, content);
            default:
                return React.createElement(type, props, content);
        }
    }
}
