/*
    This file consists of code which is responsible for establishing the DB connection
    to our servers.
*/

import postgres from "pg";

import { createTables } from "./config_tables.js";

const { Client } = postgres

/**
 * Creating a PostgreSQL client that can be exported for use throughout the project, 
 * enabling database operations to be performed consistently across all modules.
 * @module connection
 * @type postgres.Client
 */
const pg_client = new Client({
    user: "postgres",
    password: "sivaChinta@123",
    host: "127.0.0.1",
    port: "7654",
    database: "app",
});

/**
 * Establishes a connection to the PostgreSQL database and calls a callback upon successful connection.
 * @param {Function} callback - The function to be called once the connection to the database is established.
 * @throws {Error} - Throws an error if the connection to the PostgreSQL database fails.
 */
const EstablishPGConnection = (callback) => {
    // Establishing a PG Connection
    pg_client
        .connect()
        .then(() => {
            console.log("Connected to PostgreSQL Database");
            
            // Creating tables here itself
            createTables(pg_client);

            // Invoking the callback
            callback();
        })
        .catch((err) => {
            console.error("Error connecting to PostgreSQL database", err);
            
            // Can optionally write to re-connect the db
        });
};

export {EstablishPGConnection, pg_client};
