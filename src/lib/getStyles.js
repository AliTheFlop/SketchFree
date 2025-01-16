import { isContainer } from "@/components/ElementStyles";
import Style from "@/components/Style";

// Handles inner text changes
function updateElementText(e, element) {
    element.innerText = e.target.value ? e.target.value : e.target.placeholder;
}

/**
 * Most things can be handleStyleChange (if style and value)
 * Text is updateElementText
 */

// Returns styles based on the type of tag
export default function GetStyles({ tag, element }) {
    if (isContainer(tag)) {
        return (
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-2">
                    {/** Flex Direction */}
                    <Style
                        tag="select"
                        name="Flex Direction"
                        element={element}
                        type="flexDirection"
                        measurement=""
                        options={[
                            { name: "Row", value: "row" },
                            { name: "Column", value: "column" },
                        ]}
                    />

                    {/** Justify Content */}
                    <Style
                        tag="select"
                        name="Justify Content"
                        element={element}
                        type="justifyContent"
                        measurement=""
                        options={[
                            { name: "Center", value: "center" },
                            { name: "Start", value: "start" },
                            { name: "End", value: "end" },
                            { name: "Space Between", value: "space-between" },
                            { name: "Space Around", value: "space-around" },
                            { name: "Space Evenly", value: "space-evenly" },
                        ]}
                    />
                    {/** Align Items */}
                    <Style
                        tag="select"
                        name="Align Items"
                        element={element}
                        type="alignItems"
                        measurement=""
                        options={[
                            { name: "Center", value: "center" },
                            { name: "Start", value: "start" },
                            { name: "End", value: "end" },
                        ]}
                    />
                    {/** Border Width */}
                    <Style
                        tag="input"
                        name="Border Width"
                        element={element}
                        type="borderWidth"
                        measurement="px"
                        options={null}
                    />

                    {/** Border Radius */}
                    <Style
                        tag="input"
                        name="Border Radius"
                        element={element}
                        type="borderRadius"
                        measurement="px"
                        options={null}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="mb-10">
                <p className="font-bold text-sm">Inner Text</p>
                <input
                    type="text"
                    defaultValue={element.innerHTML}
                    onChange={(e) => updateElementText(e, element)}
                    className="border p-1"
                />
            </div>
        );
    }
}
