import { useStore } from "@/state/store";

function saveData(e) {
    e.preventDefault();
    console.log(e);
}

function updateElement(e, element) {
    element.innerHTML = e.target.value ? e.target.value : e.target.placeholder;
}

function handleSelectChange(e, element) {
    console.log(e);
    element.style.flexDirection = e.target.value;
}

function isContainer(tag) {
    const containers = [
        "DIV",
        "div",
        "SECTION",
        "section",
        "NAV",
        "nav",
        "BODY",
        "body",
        "HTML",
        "html",
        "FOOTER",
        "footer",
    ];
    if (containers.includes(tag)) {
        return true;
    } else {
        return false;
    }
}

function GetInputs({ element }) {
    return (
        <div className="flex flex-col">
            <div className="mb-10">
                <p className="font-bold text-sm">Inner Text</p>
                <input
                    type="text"
                    defaultValue={element.innerHTML}
                    onChange={(e) => updateElement(e, element)}
                    className="border p-1"
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="font-bold text-sm">Flex Direction</label>
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

export default function ElementStyles({ element }) {
    const elementKey = element?.id || "no-element";
    const deleteElement = useStore((state) => state.deleteElement); // Requires targetId
    return (
        <form onSubmit={(e) => saveData(e)} className="flex h-full flex-col">
            {isContainer(element.tagName) ? (
                // Used to get inputs for that type of element.
                <GetInputs element={element} key={elementKey} />
            ) : null}

            <button
                onClick={() => deleteElement(element.id)}
                className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200 self-end mt-10"
            >
                Delete Element
            </button>
        </form>
    );
}
