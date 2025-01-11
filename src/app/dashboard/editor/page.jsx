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
        console.log(styleClass);

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
    const [editableElements, setEditableElements] = useState([]);
    const [editableStyles, setEditableStyles] = useState([]);
    const activeElementRef = useRef(null);
    const [activeElementRefresh, setActiveElementRefresh] = useState(false);
    const user_id = "dbb4df83-03d2-4418-a662-39ebb9a24a5d";
    const name = "FishSlayer27";

    function setActiveElementRef(element) {
        activeElementRef.current = element;
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/getSite/a64a33ab-a1b0-41e8-a5ab-4eb35635fe93"
                );

                setEditableElements(response.data.rows[0].content.elements);
                setEditableStyles(response.data.rows[0].content.styles);
            } catch (err) {
                throw err;
            }
        }
        getData();
    }, []);

    const styles = createStyles(editableStyles);

    return (
        <>
            <div
                onDragOver={handleHoverOverElement}
                onDragLeave={handleHoverOutOfElement}
                onDrop={(e) =>
                    handleOnDropElement(
                        e,
                        editableElements,
                        setEditableElements
                    )
                }
                onClick={(e) => setActiveElementRef(e.target)}
                onMouseOver={handleHoverOver}
                onMouseOut={handleHoverOut}
                className="main-div"
            >
                {styles}
                <div
                    className="editor-container"
                    onClick={() => setActiveElementRefresh((prev) => !prev)}
                >
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
            <Sidebar activeElementRef={activeElementRef} />
        </>
    );
}
