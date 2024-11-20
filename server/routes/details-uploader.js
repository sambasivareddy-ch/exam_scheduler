import express from "express";

import { csvSingleFileUpload, parseSingleCSVFile } from "../middleware/csvFileUploadMiddleware.js";
import { insertIntoDepartmentsTable } from "../models/departments.js";
import { insertIntoStudentsTable } from "../models/student.js";

const router = express.Router();

router.post("/", csvSingleFileUpload, parseSingleCSVFile, (req, res) => {
    try {
        insertIntoDepartmentsTable(
            req.rows[0]["stud_dept_id"],
            String(req.body.department)
        );
        insertIntoStudentsTable(req.rows);
        res.status(200).json({
            message: "CSV data successfully added to database",
        });
    } catch (err) {
        res.status(500).json({ message: "Error inserting data", err });
    }
});

export default router;
