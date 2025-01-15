import { isContainer } from "@/components/ElementStyles";

// Handles inner text changes
function updateElementText(e, element) {
    element.innerText = e.target.value ? e.target.value : e.target.placeholder;
}

// Handles changes for selects
function handleSelectChange(e, element, type) {
    element.style[type] = e.target.value;
}

/**
 * Selects are for: flexDirection (tba)
 * ElementText is for: text (tba)
 * TBA
 */

// Returns styles based on the type of tag
export default function GetStyles({ tag, element }) {
    if (isContainer(tag)) {
        return (
            <div className="flex flex-col">
                <div className="mb-10">
                    <p className="font-bold text-sm">Inner Text</p>
                    <input
                        type="text"
                        defaultValue={element.innerHTML}
                        onChange={(e) => updateElementText(e, element)}
                        className="border p-1"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="font-bold text-sm">
                            Flex Direction
                        </label>
                        <select
                            name="flex-direction"
                            className="border p-1"
                            onChange={(e) =>
                                handleSelectChange(e, element, "flexDirection")
                            }
                        >
                            <option value="column">Column</option>
                            <option value="row">Row</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="font-bold text-sm">
                            Flex Direction
                        </label>
                        <select
                            name="flex-direction"
                            className="border p-1"
                            onChange={(e) => handleSelectChange(e, element)}
                        >
                            <option value="column">Column</option>
                            <option value="row">Row</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
