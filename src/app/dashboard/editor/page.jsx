"use client";
import RenderChildren from "@/components/RenderChildren";
import BottomBar from "@/components/BottomBar";
import elements from "@/lib/content";
import { useState } from "react";
import {
    handleHoverOutOfElement,
    handleOnDropElement,
    handleHoverOverElement,
} from "@/lib/dragEvents";

export default function Editor() {
    const [editableElements, setEditableElements] = useState(elements);

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
                className="main-div"
            >
                <div className="editor-container">
                    <RenderChildren elements={editableElements} />
                </div>
            </div>
            <BottomBar />
        </>
    );
}
