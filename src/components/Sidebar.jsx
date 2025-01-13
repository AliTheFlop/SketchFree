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
                className="p-3 overflow-auto h-[100vh] w-[250px]
    bg-blue-950 backdrop-blur-sm shadow-lg border 
     hover:delay-0 delay-500 transition-transform duration-300 flex flex-col"
            >
                <div className="flex flex-col gap-3 mb-16">
                    <button
                        className="p-2 rounded-md text-[16px] border text-white hover:bg-gray-100 hover:text-blue-950
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "h1")}
                    >
                        Heading
                    </button>
                    <button
                        className="p-2 rounded-md text-[16px] border text-white hover:bg-gray-100 hover:text-blue-950
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "p")}
                    >
                        Paragraph
                    </button>
                    <button
                        className="p-2 rounded-md text-[16px] border text-white hover:bg-gray-100 hover:text-blue-950
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "div")}
                    >
                        Container
                    </button>
                    <button
                        className="p-2 rounded-md text-[16px] border text-white hover:bg-gray-100 hover:text-blue-950
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "button")}
                    >
                        Button
                    </button>
                </div>
                <Stylebar element={activeElementRef.current} />
            </div>
        </>
    );
}
