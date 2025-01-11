"use client";
import RenderChildren from "@/components/RenderChildren";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    handleHoverOutOfElement,
    handleOnDropElement,
    handleHoverOverElement,
} from "@/lib/dragEvents";

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

export default function Editor() {
    const [editableElements, setEditableElements] = useState([]);
    const activeElementRef = useRef(null);
    const [activeElementRefresh, setActiveElementRefresh] = useState(false);
    const user_id = "dbb4df83-03d2-4418-a662-39ebb9a24a5d";
    const name = "FishSlayer27";

    function setActiveElementRef(element) {
        activeElementRef.current = element;
        console.log(activeElementRef);
    }

    function refreshActiveElement() {
        setActiveElementRefresh((prev) => !prev);
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/getSite/a64a33ab-a1b0-41e8-a5ab-4eb35635fe93"
                );

                setEditableElements(response.data.rows[0].content);
            } catch (err) {
                throw err;
            }
        }
        getData();
    }, []);

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
                className="main-div"
            >
                <div
                    className="editor-container"
                    onClick={setActiveElementRefresh}
                >
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
            <BottomBar activeElementRef={activeElementRef} />
        </>
    );
}
