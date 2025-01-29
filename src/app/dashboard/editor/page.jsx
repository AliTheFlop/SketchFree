"use client";
import RenderChildren from "@/components/RenderChildren";
import { useEffect } from "react";
import axios from "axios";
import {
    handleHoverOutOfElement,
    handleHoverOverElement,
    onDrag,
} from "@/lib/dragEvents";
import handleOnDropElement from "@/lib/componentEvents";
import Sidebar from "@/components/Sidebar";
import { useStore } from "@/state/store";
import { createStyles } from "@/lib/createStyles";
import { isContainer } from "@/components/ElementStyles";

/**
 * Can access DB @ 192.168.4.132:5432
 * Host: postgres
 * DB: Sketchfree
 * PW: PGPASS in .env
 *
 * Postgres init file @ /backend/db.js
 */

// Saves data - saved for later...
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

// When hovering over an element add hoverover,
// if it's a div or container we don't want it draggable
function handleHoverOver(e) {
    e.target.classList.add("hoverover");
    if (!isContainer(e.target.tagName)) {
        e.target.draggable = true;
    }
}

// Remove hovered-over tags and classes
function handleHoverOut(e) {
    e.target.classList.remove("hoverover");
    e.target.draggable = false;
}

// Main editor
export default function Editor() {
    // Get new state on each refresh
    const editableElements = useStore((state) => state.editableElements);
    const editableStyles = useStore((state) => state.editableStyles);
    const insertElement = useStore((state) => state.insertElement);
    const setActiveElement = useStore((state) => state.setActiveElement);
    const deleteElement = useStore((state) => state.deleteElement);
    const insertStyle = useStore((state) => state.insertStyle);

    // Saved for later dont delete
    const user_id = "dbb4df83-03d2-4418-a662-39ebb9a24a5d";
    const name = "FishSlayer27";

    // Set elemet that's currently active (onClick)
    function setActiveElementRef(e, element) {
        e.preventDefault();
        setActiveElement(element);
    }

    // Get initial page data
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    // Replace ID with real ID,
                    // this link is just for now
                    "http://localhost:4000/api/getSite/a64a33ab-a1b0-41e8-a5ab-4eb35635fe93"
                );

                // Set elements / page
                useStore
                    .getState()
                    .setEditableElements(
                        response.data.rows[0].content.elements
                    );
                // Set styles for page
                useStore
                    .getState()
                    .setEditableStyles(response.data.rows[0].content.styles);
            } catch (err) {
                throw err;
            }
        }
        // Call function
        getData();
    }, []);

    // Generate NextJS-friendly styles to inject into the page
    const styles = createStyles(editableStyles);
    return (
        // This has all of the main hover and drag actions
        // ALL Drag actions are on the main top div, it's simple
        // and easier to handle.
        // onDragOver / onDragLeave -> Add / Remove border
        // onDragStart -> On dragging an element, set its data in DataTransfer
        // onDrop inserts it relative to where the mouse is
        // onClick sets the active element (for styles mainly)
        // onMouseOver
        <div className="flex flex-row w-full">
            <Sidebar editableStyles={editableStyles} />
            <div
                // Drag over any element adds helpful border
                // Based on where mouse is
                onDragOver={handleHoverOverElement}
                // Drag away from an element removes that
                onDragLeave={handleHoverOutOfElement}
                // On drag of any element
                onDragStart={(e) => onDrag(e, null, editableElements)}
                // Drop item onto page, update elements, insertNewElement, deleteElement
                onDrop={(e) =>
                    handleOnDropElement(
                        e,
                        editableElements,
                        editableStyles,
                        insertElement,
                        insertStyle,
                        deleteElement
                    )
                }
                // On click set element as active (updates stylebar)
                onClick={(e) => setActiveElementRef(e, e.target)}
                // Adds / remove a border when mouse is on an element (UX)
                onMouseOver={handleHoverOver}
                onMouseOut={handleHoverOut}
                //Div styles
                className="main-div flex flex-row min-h-full w-full h-[100vh] overflow-auto"
            >
                {/** Inject styles into div */}
                {styles}
                {/** The editor container itself */}
                <div className="editor-container w-full">
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
        </div>
    );
}
