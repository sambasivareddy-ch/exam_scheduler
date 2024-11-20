import { pg_client } from "../config/connection.js";

const insertIntoAdminTable = (adminEmail, adminPassword) => {
    const queryString = `
        INSERT INTO ADMIN (EMAIL_ADDRESS, PASSWORD) VALUES ('${adminEmail}', '${adminPassword}')
    `;

    return pg_client.query(queryString);
};

const getAdminDetails = (adminEmail) => {
    const queryString = `
        SELECT * FROM ADMIN WHERE EMAIL_ADDRESS = ${adminEmail};
    `;

    return pg_client.query(queryString);
};

export { insertIntoAdminTable, getAdminDetails };
