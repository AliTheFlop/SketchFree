"use client";
import Input from "@/components/Input";
import { useState } from "react";

// React handles DOM, so NO getElementById.
// For dragging and that im not sure how it will work
// Buuut we'll figure it out >:D

export default function Editor() {
    const [item, setItem] = useState([]);
    function dragStartHandler(e) {
        // Data is fine, we can get the specific thing (p h1 h2 etc) and have that in setData to specify what we're adding to the editor
        const content = JSON.stringify({
            tag: e.target.tagName,
            content: e.target.innerHTML,
        });
        console.log(e.target);
        e.dataTransfer.setData("text", content);
        e.dataTransfer.effectAllowed = "move";
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    function dropHandler(e) {
        e.preventDefault();

        const content = JSON.parse(e.dataTransfer.getData("text"));
        const tagLower = content.tag.toLowerCase();
        const child = content.content;
        const newItem = { tagLower, child };
        console.log(newItem);

        setItem((prev) => {
            return [...prev, newItem];
        });
    }

    return (
        <div>
            <div>
                <h1
                    draggable="true"
                    onDragStart={dragStartHandler}
                    placeholder="type something"
                >
                    Joe
                </h1>
            </div>
            <div
                className="outline w-72 h-72 "
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
            >
                {item.length > 0
                    ? item.map((items) => (
                          <Input
                              type={items.tagLower}
                              key="johhnnyy"
                              content={items.child}
                          />
                      ))
                    : "No items yet"}
            </div>
        </div>
    );
}
