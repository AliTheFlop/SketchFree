import { onDrag } from "@/lib/dragEvents";
import Stylebar from "./Stylebar";

/* 

className="fixed left-0 top-[20%] p-3 h-4/6
    bg-white/80 backdrop-blur-sm rounded-r-2xl shadow-lg border border-gray-200
    translate-x-[-80%] hover:delay-0 delay-500  hover:translate-x-0 transition-transform duration-300"

*/

export default function Sidebar({ activeElementRef }) {
    return (
        <>
            <div
                className="p-3 min-h-[100vh] w-[250px]
    bg-gray-200 backdrop-blur-sm rounded-r-2xl shadow-lg border border-gray-200
     hover:delay-0 delay-500 transition-transform duration-300"
            >
                <div className="flex flex-col gap-3 grid-flow-row mb-16">
                    <button
                        className="p-2 rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "h1")}
                    >
                        Heading
                    </button>
                    <button
                        className="p-2 rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "p")}
                    >
                        Paragraph
                    </button>
                    <button
                        className="p-2 rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "div")}
                    >
                        Container
                    </button>
                    <button
                        className="p-2 rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "button")}
                    >
                        Button
                    </button>
                </div>
            </div>
            <Stylebar element={activeElementRef.current} />
        </>
    );
}
