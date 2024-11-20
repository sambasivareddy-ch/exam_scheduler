import express, { json } from "express";
import cors from 'cors';

// All API routes
import studentDetailsUploadRouter from "./routes/details-uploader.js";
import planExamRouter from "./routes/plan-exam.js";
import getDeptDetails from "./routes/get-departments.js";
import createAdminRouter from "./routes/create-admin.js";

// PG Connection establishing handler
import { EstablishPGConnection } from "./config/connection.js";

// Creating an express app
const app = express();

// Starts our server at 8080 port
const startAppServer = () => {
    app.listen(8080, () => {
        console.log('App Server started at: 8080');
    })
}

// Allowing Cross-Origin Requests
app.use(cors({
    origin: true,
    credentials: true,
}))

// Allow processing JSON
app.use(json())

app.use('/create-admin', createAdminRouter);
app.use('/student-details-uploader', studentDetailsUploadRouter);
app.use('/plan-exam', planExamRouter);
app.use('/get-depts', getDeptDetails);

/*
    Establishing the PG/Database connection then only start the server
*/
EstablishPGConnection(startAppServer);
