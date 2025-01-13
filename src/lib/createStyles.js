export function createStyles(editableStyles) {
    let cssString = "";

    editableStyles.forEach((styleClass) => {
        let classCss = Object.entries(styleClass.styles)
            .map(([key, value]) => {
                return `    ${key}: ${value};`;
            })
            .join("\n");

        cssString += `.${styleClass.class} {\n${classCss}\n}\n`;
    });

    return (
        <style jsx global>{`
            ${cssString.trim()}
        `}</style>
    );
}
