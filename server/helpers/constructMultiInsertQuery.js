import { detectDataType } from "./detectDataType.js";

/**
 * Constructs a multi-row INSERT SQL query for the specified table.
 *
 * @function constructMultiInsertQuery
 * @param {string} table_name - The name of the table into which data will be inserted.
 * @param {Array<string>} column_names - An array of column names corresponding to the data being inserted.
 * @param {Array<Object>} rows - An array of objects, where each object represents a row of data to be inserted. 
 * Each object should have properties that match the column names.
 * 
 * @returns {string} The constructed SQL INSERT query as a string.
 * @throws {Error} Throws an error if the rows array is empty or if the data types cannot be detected.
 * 
 * @example
 * const query = constructMultiInsertQuery(
 *     'students',
 *     [STUD_ROLLNO', 'STUD_DEPT_ID'],
 *     [
 *         { STUD_ROLLNO: 'A123', STUD_DEPT_ID: 101 },
 *         { STUD_ROLLNO: 'B456', STUD_DEPT_ID: 102 }
 *     ]
 * );
 * console.log(query);
 * // Outputs:
 * // INSERT INTO students (STUD_ROLLNO,STUD_DEPT_ID) VALUES ('A123',101),('B456',102);
 */
const constructMultiInsertQuery = (table_name, column_names, rows) => {
    return `
        INSERT INTO ${table_name} (${column_names.join(",")}) VALUES
        ${rows
            .map((row) => {
                const rowString =
                    "(" +
                    column_names
                        .map((col) => detectDataType(row[col]))
                        .join(",") +
                    ")";
                return rowString
            })
            .join(",")};
    `;
};

export default constructMultiInsertQuery;
