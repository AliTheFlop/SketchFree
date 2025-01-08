import React from "react";

export default function Input({ type, content, ...props }) {
    if (!content) console.error("No content provided");

    switch (type) {
        case "h1" || "h2" || "h3" || "h4" || "h5" || "h6":
            return React.createElement(type, props, content);
        default:
            return React.createElement(type, props, content);
    }
}
