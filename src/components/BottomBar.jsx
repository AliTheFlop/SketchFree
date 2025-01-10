function onDrag(e, type) {
    e.dataTransfer.setData("element", type);
}

export default function BottomBar() {
    return (
        <div
            className="fixed left-0 top-[20%] p-3 flex flex-col gap-3 
    bg-white/80 backdrop-blur-sm rounded-r-2xl shadow-lg border border-gray-200
    translate-x-[-80%] hover:delay-0 delay-500  hover:translate-x-0 transition-transform duration-300"
        >
            <button
                className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100 rounded-full 
        transition-all duration-200"
                draggable
                onDrag={(e) => onDrag(e, "h1")}
            >
                Heading
            </button>
            <button
                className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100 rounded-full 
        transition-all duration-200"
                draggable
                onDrag={(e) => onDrag(e, "p")}
            >
                Paragraph
            </button>
            <button
                className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100 rounded-full 
        transition-all duration-200"
                draggable
                onDrag={(e) => onDrag(e, "div")}
            >
                Container
            </button>
            <button
                className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100 rounded-full 
        transition-all duration-200"
                draggable
                onDrag={(e) => onDrag(e, "button")}
            >
                Button
            </button>
        </div>
    );
}
