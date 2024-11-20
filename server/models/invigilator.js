import { pg_client } from "../config/connection.js";

import constructMultiInsertQuery from "../helpers/constructMultiInsertQuery.js";

const insertIntoInvigilatorsTable = async (rows) => {
    const queryString = constructMultiInsertQuery("invigilators", ['invg_email'], rows);

    await pg_client
        .query(queryString)
        .then((rowsInserted) => {
            console.log(`Inserted ${rowsInserted} rows into Invigilators Table`);
        })
        .catch((err) => {
            console.error(
                "Error occurred while inserting into Invigilators table",
                err
            );
        });
};

export { insertIntoInvigilatorsTable };
