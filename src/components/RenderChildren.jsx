import React from "react";

function handleHoverOverElement(e) {
    e.target.classList.add("dragover");
}

function handleHoverOutOfElement(e) {
    e.target.classList.remove("dragover");
}

export default function RenderChildren({ elements }) {
    return (
        <div
            onDragOver={handleHoverOverElement}
            onDragLeave={handleHoverOutOfElement}
        >
            {elements.map((element, index) => (
                <React.Fragment key={index}>
                    {React.createElement(
                        element.type,
                        element.props,
                        element.children ? (
                            <RenderChildren elements={element.children} />
                        ) : (
                            element.content
                        )
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
