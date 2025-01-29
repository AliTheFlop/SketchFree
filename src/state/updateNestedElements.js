export default function updateNestedElements(
    elements,
    targetId,
    newElement,
    insertBefore,
    insertInsideAbove,
    insertInsideBelow
) {
    if (insertInsideAbove || insertInsideBelow) {
        return elements.map((element) => {
            // This element is the element
            if (element.id === targetId) {
                // Has children already -> Insert above or below
                if (element.children && element.children.length > 0) {
                    // Insert above? Add to start of array. Else push to end of it
                    insertInsideAbove
                        ? element.children.unshift(newElement)
                        : element.children.push(newElement);
                } else {
                    // ELSE There's no childrens array or it's empty, initialize and push to it
                    if (elements.children === null) {
                        element.children = [];
                    }
                    element.children.push(newElement);
                }
                return element;

                /**
                 * We insert to the top or bottom depending on where they drop
                 * If it's inbetween and there's elements, for now they need to have the mouse on the bottom of that element
                 *
                 */
            }

            if (element.children && element.children.length > 0) {
                return {
                    ...element,
                    children: updateNestedElements(
                        element.children,
                        targetId,
                        newElement,
                        insertBefore,
                        insertInsideAbove,
                        insertInsideBelow
                    ),
                };
            }
            return element;
        });
    } else {
        // No insertinside -> add it normally (its a normal element)
        return elements
            .map((element) => {
                // If this is the target element
                if (element.id === targetId) {
                    return insertBefore
                        ? [newElement, element]
                        : [element, newElement];
                }

                // If this element has children, recursively search them
                if (element.children && element.children.length > 0) {
                    return {
                        ...element,
                        children: updateNestedElements(
                            element.children,
                            targetId,
                            newElement,
                            insertBefore
                        ),
                    };
                }

                return element;
            })
            .flat();
    }
}
