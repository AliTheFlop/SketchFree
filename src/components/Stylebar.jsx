import ElementStyles from "@/components/ElementStyles";
import { useStore } from "@/state/store";

export default function Stylebar() {
    const activeElement = useStore((state) => state.activeElement);
    return activeElement ? (
        <div>
            <ElementStyles element={activeElement} />
        </div>
    ) : null;
}
