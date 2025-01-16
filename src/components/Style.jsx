function handleStyleChange(e, element, type, measurement) {
    element.style[type] = `${e.target.value}${measurement}`;
}

export default function Style({
    tag,
    name,
    element,
    type,
    measurement,
    options,
}) {
    switch (tag) {
        case "input":
            return (
                <div className="flex flex-col gap-1.5 my-2">
                    <div className="flex flex-row font-bold text-sm">
                        <label>
                            {name} (in {measurement})
                        </label>
                    </div>

                    <input
                        onChange={(e) =>
                            handleStyleChange(e, element, type, measurement)
                        }
                        defaultValue={
                            element.style[type] ? element.style[type] : ""
                        }
                        className="w-1/2 border border-gray-200 focus:outline-none"
                    />
                </div>
            );
        case "select":
            return (
                <div className="flex flex-col gap-1.5 my-2">
                    <label className="font-bold text-sm">{name}</label>
                    <select
                        name="flex-direction"
                        className="w-1/2 border border-gray-200 focus:outline-none"
                        onChange={(e) =>
                            handleStyleChange(e, element, type, measurement)
                        }
                        defaultValue={
                            element.style[type] ? element.style[type] : ""
                        }
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            );
        default:
            return <div>No tag selected + {tag}</div>;
    }
}
