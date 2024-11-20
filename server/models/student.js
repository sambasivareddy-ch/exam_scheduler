import { pg_client } from "../config/connection.js";

import constructMultiInsertQuery from "../helpers/constructMultiInsertQuery.js";

const insertIntoStudentsTable = async (rows) => {
    const queryString = constructMultiInsertQuery(
        "students",
        ["stud_rollno", "stud_dept_id"],
        rows
    );

    await pg_client
        .query(queryString)
        .then((queryResults) => {
            console.log(
                `Inserted ${queryResults.rowCount} row(s) into Students Table`
            );
        })
        .catch((err) => {
            console.error(
                "Error occurred while inserting into Students table",
                err
            );
        });
};

const getStudentsWithGivenDeptID = async (dept_id) => {
    const queryString = `
        SELECT STUD_ROLLNO FROM STUDENTS S WHERE S.STUD_DEPT_ID = ${dept_id};
    `;

    await pg_client
        .query(queryString)
        .then((queryResult) => {
            return queryResult.rows;
        })
        .catch((err) => {
            console.error("Error occurred while fetching student details", err);
            return [];
        });
};

export { insertIntoStudentsTable, getStudentsWithGivenDeptID };
