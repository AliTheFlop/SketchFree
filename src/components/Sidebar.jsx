import { onDrag } from "@/lib/dragEvents";

export default function Sidebar({ activeElementRef }) {
    return (
        <>
            <div
                className="fixed left-0 top-[20%] p-3 h-4/6
    bg-white/80 backdrop-blur-sm rounded-r-2xl shadow-lg border border-gray-200
    translate-x-[-80%] hover:delay-0 delay-500  hover:translate-x-0 transition-transform duration-300"
            >
                <div className="grid grid-cols-2 grid-rows-3 gap-3 grid-flow-row mb-16">
                    <button
                        className=" py-4  px-2 h-20 rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "h1")}
                    >
                        Heading
                    </button>
                    <button
                        className="py-4  px-2 h-20  rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "p")}
                    >
                        Paragraph
                    </button>
                    <button
                        className="py-4 px-2 h-20  rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "div")}
                    >
                        Container
                    </button>
                    <button
                        className="py-4  px-2 h-20  rounded-md text-lg border text-gray-600 hover:bg-gray-100 
        transition-all duration-200"
                        draggable
                        onDragStart={(e) => onDrag(e, "button")}
                    >
                        Button
                    </button>
                </div>

                {activeElementRef.current ? (
                    <div>
                        <h1>
                            {activeElementRef.current.tagName !== "DIV"
                                ? activeElementRef.current.innerHTML
                                : null}
                        </h1>
                    </div>
                ) : null}
            </div>
        </>
    );
}
