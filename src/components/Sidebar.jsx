import { onDrag } from "@/lib/dragEvents";
import Stylebar from "./Stylebar";

/* 

className="fixed left-0 top-[20%] p-3 h-4/6
    bg-white/80 backdrop-blur-sm rounded-r-2xl shadow-lg border border-gray-200
    translate-x-[-80%] hover:delay-0 delay-500  hover:translate-x-0 transition-transform duration-300"

*/

export default function Sidebar({ editableStyles }) {
    return (
        <>
            <div
                className="p-3 overflow-auto h-[100vh] w-1/6
    bg-white border-r-stone-300 backdrop-blur-sm shadow-lg border 
     hover:delay-0 delay-500 transition-transform duration-300 flex flex-col pt-28"
            >
                <div className="grid grid-cols-2 gap-3 mb-16">
                    <button
                        className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "h1")}
                    >
                        Heading
                    </button>
                    <button
                        className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "p")}
                    >
                        Paragraph
                    </button>
                    <button
                        className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "div")}
                    >
                        Container
                    </button>
                    <button
                        className="p-1.5 rounded-md text-[16px] border text-white bg-stone-900 hover:bg-gray-100 hover:text-stone-900 hover:border-stone-900
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "button")}
                    >
                        Button
                    </button>
                </div>
                <Stylebar />
            </div>
        </>
    );
}
