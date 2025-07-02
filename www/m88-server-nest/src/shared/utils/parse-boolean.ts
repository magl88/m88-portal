/**
 * Converts a string value to a boolean value.
 *
 * This function takes a string representing a boolean value
 * and returns the corresponding boolean. If the string is
 * "true" (case-insensitive), the function returns `true`. If the string is
 * "false", the function returns `false`. If a value of another type
 * or a string that does not match the expected values is passed, an
 * exception will be thrown.
 *
 * @param value - A string representing a boolean value ("true" or "false").
 * @returns {boolean} The boolean value corresponding to the passed string.
 * @throws {Error} If the passed value cannot be converted to a boolean.
 *
 * @example
 * parseBoolean('true');  // returns true
 * parseBoolean("false"); // returns false
 * parseBoolean("TRUE");  // returns true
 * parseBoolean("False"); // returns false
 */
export function parseBoolean(value: string): boolean {
	if (typeof value === "boolean") {
		return value;
	}

	if (typeof value === "string") {
		const lowerValue = value.trim().toLowerCase();
		if (lowerValue === "true") {
			return true;
		}
		if (lowerValue === "false") {
			return false;
		}
	}

	throw new Error(`Failed to convert value "${value}" to boolean.`);
}
