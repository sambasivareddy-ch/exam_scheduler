/**
 * Detects the data type of a given value and formats it for SQL insertion.
 *
 * The function checks if the value is numeric, boolean, or a string, and formats
 * it accordingly. Numeric values are returned as is, boolean values are returned
 * as lowercase strings ("true" or "false"), and strings are escaped and wrapped
 * in single quotes for SQL compatibility.
 *
 * @function detectDataType
 * @param {string} value - The value to be detected and formatted.
 * 
 * @returns {string} The formatted value for SQL insertion.
 * @throws {Error} Throws an error if the value is undefined.
 * 
 * @example
 * const formattedValue1 = detectDataType('42'); // returns '42'
 * const formattedValue2 = detectDataType('true'); // returns 'true'
 * const formattedValue3 = detectDataType("Hello, it's me!"); // returns "'Hello, it''s me!'"
 */
const detectDataType = (value)=> {
    // Check for numeric values
    if (!isNaN(value) && value.trim() !== '') {
        return value;
    }

    // Check for boolean values
    if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
        return value.toLowerCase();
    }

    // Otherwise, treat as a string
    return `'${value.replace(/'/g, "''")}'`; // Escape single quotes in strings
};

export {detectDataType};