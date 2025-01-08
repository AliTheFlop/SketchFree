"use client";
import RenderContainer from "@/components/RenderContainer";
import { useState } from "react";

function makeid(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

export default function Editor() {
    const [pageElements, setPageElements] = useState({
        elements: [
            {
                id: "g4d3tdh6",
                type: "h1",
                content: "John Cena 2",
                styles: { fontSize: "72px", fontWeight: "bold" },
            },
            {
                id: "gf4g39d2",
                type: "h2",
                content: "John Cena 2",
                styles: { fontSize: "24px", fontWeight: "bold" },
            },
            {
                id: "g4d3thh6",
                type: "div",
                content: null,
                styles: {
                    fontSize: "12px",
                    fontWeight: "medium",
                    border: "1px solid pink",
                },
                children: [
                    {
                        id: "fkeopt4",
                        type: "h2",
                        content: "I'm in a div",
                        styles: { fontSize: "36px" },
                    },
                ],
            },
        ],
        activeElement: null,
    });

    function dragStartHandler(e) {
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

        /*
        setPageElements((prev) => {
            return [...prev, newItem];
        }); */
    }

    return (
        <div>
            <div>
                <h1
                    draggable="true"
                    onDragStart={dragStartHandler}
                    placeholder="type something"
                    contentEditable="true"
                    className="outline"
                ></h1>
            </div>
            <div
                className="outline w-72 h-72 "
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
            >
                {pageElements.elements
                    ? pageElements.elements.map((element) => (
                          <RenderContainer
                              key={element.id}
                              type={element.type}
                              content={element.content}
                              children={element.children ?? null}
                          />
                      ))
                    : "No items yet"}
            </div>
        </div>
    );
}
