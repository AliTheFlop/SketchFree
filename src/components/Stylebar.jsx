import ElementStyles from "@/components/ElementStyles";

export default function Stylebar({ element, editableStyles }) {
    return element ? (
        <div>
            <ElementStyles element={element} />
        </div>
    ) : (
        <div>Click a div to edit it</div>
    );
}
