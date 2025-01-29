function getElementStyle(editableStyles, className) {
    return editableStyles.filter((style) => style.class === className);
}

export default getElementStyle;
