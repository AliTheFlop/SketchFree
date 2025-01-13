import { create } from "zustand";

export const useStore = create((set) => ({
    editableElements: [], // Initial elements
    editableStyles: [],

    // Action to insert a new element
    insertElement: (targetId, newElement, insertBefore) =>
        set((state) => ({
            editableElements: updateNestedElements(
                state.editableElements,
                targetId,
                newElement,
                insertBefore
            ),
        })),
    setEditableElements: (elements) =>
        set((state) => ({
            editableElements: elements,
        })),

    setEditableStyles: (styles) =>
        set((state) => ({
            editableStyles: styles,
        })),
}));

function updateNestedElements(elements, targetId, newElement, insertBefore) {
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
