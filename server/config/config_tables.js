/*
    This file consists of following functions:
    1. createTables(pg_client)
*/

/**
 * Creates the necessary tables in the PostgreSQL database if they do not already exist.
 * This includes the Admin, ExamPlan, SeatingArrangement, Invigilators, Departments, and Students tables.
 *
 * @function createTables
 * @param {Object} pg_client - The PostgreSQL client used to execute queries.
 * @throws {Error} - Throws an error if the table creation queries fail.
 */
export const createTables = (pg_client) => {
    // Admin Table
    pg_client
        .query(
            `
                CREATE TABLE IF NOT EXISTS ADMIN (
                    EMAIL_ADDRESS TEXT PRIMARY KEY,
                    PASSWORD TEXT,
                    SESSION_ID TEXT,
                    SESSION_CREATED_AT TIMESTAMP
                )
            `
        )
        .then(() => {
            console.log("Admin Table Created");
        });

    // Invigilator Table
    pg_client
        .query(
            `
                CREATE TABLE IF NOT EXISTS INVIGILATORS (
                    INVG_ID BIGSERIAL PRIMARY KEY,
                    INVG_EMAIL TEXT UNIQUE
                );
            `
        )
        .then(() => {
            console.log("Invigilator Table Created");
        });

    // Departments Table
    pg_client
        .query(
            `
                CREATE TABLE IF NOT EXISTS DEPARTMENTS (
                    DEPT_ID INT PRIMARY KEY,
                    DEPT_NAME TEXT
                );
            `
        )
        .then(() => {
            console.log("Departments Table Created");
        });

    // Students Table
    pg_client
        .query(
            `
                CREATE TABLE IF NOT EXISTS STUDENTS (
                    STUD_ID BIGSERIAL PRIMARY KEY,
                    STUD_ROLLNO TEXT UNIQUE,
                    STUD_DEPT_ID INT,
                    CONSTRAINT fk_department FOREIGN KEY (STUD_DEPT_ID)
                    REFERENCES departments(dept_id)
                );
            `
        )
        .then(() => {
            console.log("Students Table Created");
        });

    // ExamPlan Table
    pg_client
        .query(
            `
            CREATE TABLE IF NOT EXISTS EXAMPLAN (
                PLAN_ID BIGSERIAL PRIMARY KEY,
                EXAM_NAME TEXT,
                NUM_ROOMS INT,
                BENCHES_PER_ROOM INT,
                STUDENTS_PER_BENCH INT
            )
        `
        )
        .then(() => {
            console.log("ExamPlan Table Created");
        });

    // SeatingArrangement Table
    pg_client
        .query(
            `
            CREATE TABLE IF NOT EXISTS SEATINGARRANGEMENT (
                SEAT_ID BIGSERIAL,
                PLAN_ID BIGINT,
                ROLL_NUMBER TEXT,
                DEPT_ID INT,
                ROOM_NUMBER INT,
                BENCH_NUMBER INT,
                PRIMARY KEY (SEAT_ID, ROLL_NUMBER),
                CONSTRAINT fk_examplan FOREIGN KEY (PLAN_ID)
                    REFERENCES examplan(PLAN_ID)
            )
        `
        )
        .then(() => {
            console.log("SeatingArrangement Table Created");
        });
};
