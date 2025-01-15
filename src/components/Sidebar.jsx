import { onDrag } from "@/lib/dragEvents";
import Stylebar from "./Stylebar";

import { Box, Type } from "lucide-react";

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
                <div className="flex flex-col text-lg gap-3 mb-16 border-b p-4 border-gray-200 pb-10">
                    <h3 className="text-sm mb-4">Elements</h3>
                    <div
                        draggable
                        onDragStart={(e) => onDrag(e, "h1")}
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                        <Type size={18} />
                        <button>Text</button>
                    </div>

                    <div
                        draggable
                        onDragStart={(e) => onDrag(e, "div")}
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                        <Box size={18} />
                        <button>Container</button>
                    </div>
                </div>
                <Stylebar />
            </div>
        </>
    );
}
