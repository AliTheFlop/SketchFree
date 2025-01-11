import React from "react";

export default function RenderChildren({ elements }) {
    return (
        <>
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
        </>
    );
}
