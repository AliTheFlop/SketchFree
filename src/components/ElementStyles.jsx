import { useStore } from "@/state/store";
import GetStyles from "@/lib/getStyles";

function saveData(e) {
    e.preventDefault();
    console.log(e);
}

export function isContainer(tag) {
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

export default function ElementStyles({ element }) {
    const elementKey = element?.id || "no-element";

    return (
        <form onSubmit={(e) => saveData(e)} className="flex h-full flex-col">
            {/* Used to get inputs for that type of element. */}
            <GetStyles
                tag={element.tagName}
                element={element}
                key={elementKey}
            />
        </form>
    );
}
