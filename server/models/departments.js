import { pg_client } from "../config/connection.js";

const insertIntoDepartmentsTable = async (dept_id, dept_name) => {
    const queryString = `
        INSERT INTO DEPARTMENTS (dept_id, dept_name) VALUES (${dept_id}, '${dept_name}')
    `

    await pg_client
        .query(queryString)
        .then((queryResult) => {
            console.log(`Inserted ${queryResult.rowCount} row(s) into Departments Table`);
        })
        .catch((err) => {
            console.error(
                "Error occurred while inserting into Departments table",
                err
            );
        });
};

export { insertIntoDepartmentsTable };
