import type { Category } from "../interfaces/general";

/**
 * Finds the path to a category searching in a nested category structure.
 * It constructs the path from the root to the target category. 
 * 
 * @param {Category[]} categories - List of categories.
 * @param {string} categoryName - The target category.
 * 
 * @returns {string | null} - The final path to the target category, or null if not found.
 */
export const getCategoryPath = (categories: Category[], categoryName: string): string | null => {
    const findPatch = (paths: Category[], currentPath: string): string | null => {
        for (const path of paths) {
            const newPath = `${currentPath}/${path.name}`;
            const targetPathFound = path.name === categoryName;

            if (targetPathFound) 
                return newPath;

            const pathHasSubcategories = path.subcategories.length > 0;
            if (pathHasSubcategories) {
                const finalPatch: string | null = findPatch(path.subcategories, newPath);
                if (finalPatch) return finalPatch;
            }
        }
        return null;
    };

    return findPatch(categories, '') || null;
};