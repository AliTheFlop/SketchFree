"use client";
import RenderChildren from "@/components/RenderChildren";
import { useEffect } from "react";
import axios from "axios";
import {
    handleHoverOutOfElement,
    handleHoverOverElement,
} from "@/lib/dragEvents";
import handleOnDropElement from "@/lib/componentEvents";
import Sidebar from "@/components/Sidebar";
import { useStore } from "@/state/store";
import { createStyles } from "@/lib/createStyles";

/**
 * Can access DB @ 192.168.4.132:5432
 * Host: postgres
 * DB: Sketchfree
 * PW: PGPASS in .env
 *
 * Postgres init file @ /backend/db.js
 */

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
    const setActiveElement = useStore((state) => state.setActiveElement);

    // Saved for later dont delete
    const user_id = "dbb4df83-03d2-4418-a662-39ebb9a24a5d";
    const name = "FishSlayer27";

    function setActiveElementRef(e, element) {
        e.preventDefault();
        setActiveElement(element);
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
            <Sidebar editableStyles={editableStyles} />
            <div
                // Drag over any element adds border
                onDragOver={handleHoverOverElement}
                // Drag away from an element removes border
                onDragLeave={handleHoverOutOfElement}
                // Drop item onto page, updates elements aswell
                onDrop={(e) =>
                    handleOnDropElement(e, editableElements, insertElement)
                }
                // On click set element as active (updates stylebar)
                onClick={(e) => setActiveElementRef(e, e.target)}
                // Handles border on hover (for helpful selections)
                onMouseOver={handleHoverOver}
                onMouseOut={handleHoverOut}
                //Styles
                className="main-div flex flex-row min-h-full w-full h-[100vh] overflow-auto"
            >
                {styles}
                <div className="editor-container w-full">
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
        </div>
    );
}
