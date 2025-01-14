export default function TextStylebar() {
    return (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 p-1 flex items-center space-x-1">
            <select className="text-sm border-r border-gray-200 pr-2 mr-2">
                <option>Normal Text</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
            </select>
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <Bold size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <Italic size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <Link size={16} />
            </button>
            <div className="border-l border-gray-200 mx-1 h-6" />
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <AlignLeft size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <AlignCenter size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
                <AlignRight size={16} />
            </button>
        </div>
    );
}
