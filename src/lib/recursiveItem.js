function findItemRecursive(elements, targetId) {
    // Base case: if elements is not an array or empty
    if (!Array.isArray(elements) || elements.length === 0) {
        return null;
    }

    // Search through current level
    for (const element of elements) {
        // Check if current element has matching id
        if (element.id === targetId) {
            return element;
        }

        // If element has children, recursively search them
        if (element.children && element.children.length > 0) {
            const found = findItemRecursive(element.children, targetId);
            if (found) {
                return found;
            }
        }
    }

    // If nothing found at this level or below
    return null;
}

module.exports = findItemRecursive;
