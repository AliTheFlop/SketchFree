"use client";
import RenderChildren from "@/components/RenderChildren";
import BottomBar from "@/components/BottomBar";
import elements from "@/lib/content";

export default function Editor() {
    return (
        <div>
            <div className="editor-container">
                <RenderChildren elements={elements} />
            </div>
            <BottomBar />
        </div>
    );
}
