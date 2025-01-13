import { useState } from "react";

function saveData(e) {
    e.preventDefault();
    console.log(e);
}

function updateElement(e, element) {
    element.innerHTML = e.target.value ? e.target.value : e.target.placeholder;
}

function isContainer(tag) {
    const containers = [
        "DIV",
        "div",
        "SECTION",
        "section",
        "NAV",
        "nav",
        "BODY",
        "body",
        "HTML",
        "html",
        "FOOTER",
        "footer",
    ];
    if (containers.includes(tag)) {
        return true;
    } else {
        return false;
    }
}

function GetInputs({ element }) {
    return (
        <input
            type="text"
            defaultValue={element.innerHTML}
            onChange={(e) => updateElement(e, element)}
        />
    );
}

export default function ElementStyles({ element }) {
    const elementKey = element?.id || "no-element";
    return (
        <form onSubmit={(e) => saveData(e)}>
            {!isContainer(element.tagName) ? (
                // Used to get inputs for that type of element.
                <GetInputs element={element} key={elementKey} />
            ) : null}
        </form>
    );
}
