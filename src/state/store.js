import { create } from "zustand";

export const useStore = create((set) => ({
    editableElements: [], // Initial elements
    editableStyles: [], // Initial styles
    activeElement: null, // Initial Active Element

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
    deleteElement: (targetId) =>
        set((state) => ({
            editableElements: deleteElement(state.editableElements, targetId),
        })),
    // Setter for elements
    setEditableElements: (elements) =>
        set(() => ({
            editableElements: elements,
        })),
    // Setter for styles
    setEditableStyles: (styles) =>
        set(() => ({
            editableStyles: styles,
        })),
    setActiveElement: (newElement) =>
        set(() => ({
            activeElement: newElement,
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

function deleteElement(elements, targetId) {
    return elements
        .filter((element) => element.id !== targetId) // Remove the target element
        .map((element) => {
            // If this element has children, recursively search them
            if (element.children && element.children.length > 0) {
                return {
                    ...element,
                    children: deleteElement(element.children, targetId),
                };
            }
            return element;
        });
}
