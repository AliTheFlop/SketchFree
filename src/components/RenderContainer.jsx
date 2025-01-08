import RenderElement from "./RenderElement";

// If we get a element with children, it's rendered here

export default function RenderContainer({
    uniqueId,
    type,
    content,
    children,
    ...props
}) {
    if (!Array.isArray(children)) {
        return (
            <RenderElement
                type={type}
                content={content}
                {...props}
                isContainer="false"
            />
        );
    }

    return (
        <h1>Ok</h1>
        // TODO: Need a componenet that displays everyting inside a container (including the next container) but the next container needs to display whats in THAT container
    );
}
