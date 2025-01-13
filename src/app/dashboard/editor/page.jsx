"use client";
import RenderChildren from "@/components/RenderChildren";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    handleHoverOutOfElement,
    handleOnDropElement,
    handleHoverOverElement,
} from "@/lib/dragEvents";
import Sidebar from "@/components/Sidebar";
import { useStore } from "@/state/store";

async function saveData(user_id, name, content) {
    try {
        await axios.post("http://localhost:4000/api/createSite", {
            user_id,
            name,
            content,
        });
    } catch (err) {
        throw err;
    }
}

function createStyles(editableStyles) {
    let cssString = "";

    editableStyles.forEach((styleClass) => {
        let classCss = Object.entries(styleClass.styles)
            .map(([key, value]) => {
                return `    ${key}: ${value};`;
            })
            .join("\n");

        cssString += `.${styleClass.class} {\n${classCss}\n}\n`;
    });

    return (
        <style jsx global>{`
            ${cssString.trim()}
        `}</style>
    );
}

function handleHoverOver(e) {
    e.target.classList.add("hoverover");
}

function handleHoverOut(e) {
    e.target.classList.remove("hoverover");
}

export default function Editor() {
    const editableElements = useStore((state) => state.editableElements);
    const editableStyles = useStore((state) => state.editableStyles);
    const insertElement = useStore((state) => state.insertElement);
    const [activeElementRefresh, setActiveElementRefresh] = useState(false);
    const activeElementRef = useRef(null);

    const user_id = "dbb4df83-03d2-4418-a662-39ebb9a24a5d";
    const name = "FishSlayer27";

    function setActiveElementRef(e, element) {
        e.preventDefault();
        activeElementRef.current = element;
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/getSite/a64a33ab-a1b0-41e8-a5ab-4eb35635fe93"
                );
                useStore
                    .getState()
                    .setEditableElements(
                        response.data.rows[0].content.elements
                    );
                useStore
                    .getState()
                    .setEditableStyles(response.data.rows[0].content.styles);
            } catch (err) {
                throw err;
            }
        }
        getData();
    }, []);

    const styles = createStyles(editableStyles);
    return (
        <div className="flex flex-row w-full">
            <Sidebar
                activeElementRef={activeElementRef}
                editableStyles={editableStyles}
            />
            <div
                onDragOver={handleHoverOverElement}
                onDragLeave={handleHoverOutOfElement}
                onDrop={(e) =>
                    handleOnDropElement(e, editableElements, insertElement)
                }
                onClick={(e) => setActiveElementRef(e, e.target)}
                onMouseOver={handleHoverOver}
                onMouseOut={handleHoverOut}
                className="main-div flex flex-row min-h-full w-full h-[100vh] overflow-auto"
            >
                {styles}
                <div
                    className="editor-container w-full"
                    onClick={() => setActiveElementRefresh((prev) => !prev)}
                >
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
        </div>
    );
}
