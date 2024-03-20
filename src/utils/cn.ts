/**
 * Generates a string of concatenated non-empty classes separated by a space.
 *
 * @param {string[]} classes - An array of strings representing CSS classes.
 * @return {string} A string of concatenated non-empty classes separated by a space.
 */
export const cn = (...classes: string[]) => {
	return classes.filter(Boolean).join(" ");
};
