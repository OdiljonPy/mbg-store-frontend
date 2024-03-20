/**
 * Generates a string of concatenated non-empty classes separated by a space.
 * Allows to add undefined values but it should ignore them.
 *
 * @param {(string | undefined)[]} classes - An array of strings representing CSS classes.
 * @return {string} A string of concatenated non-empty classes separated by a space.
 */
export const cn = (...classList: (string | undefined | false)[]) =>
	classList.filter(Boolean).join(" ");
