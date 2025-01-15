import ElementStyles from "@/components/ElementStyles";
import { useStore } from "@/state/store";

export default function Stylebar() {
    const activeElement = useStore((state) => state.activeElement);
    const deleteElement = useStore((state) => state.deleteElement); // Requires targetId
    return activeElement ? (
        <div>
            <ElementStyles element={activeElement} />
            <button
                onClick={() => deleteElement(activeElement.id)}
                className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200 self-end mt-10"
            >
                Delete Element
            </button>
        </div>
    ) : null;
}
