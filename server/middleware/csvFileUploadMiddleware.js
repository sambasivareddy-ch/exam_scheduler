import multer from "multer";
import csvParser from "csv-parser";
import fs from "fs";
import path from "path";

const upload = multer({
    dest: "../uploads/",
});

// CSV Single File Upload handling middleware
export const csvSingleFileUpload = upload.single("file");

// CSV Multi file upload handling middleware
export const csvMultiFilesUpload = upload.array("files");

/**
 * Middleware function to parse an uploaded CSV file and extract its contents.
 *
 * This function checks for the presence of a file in the request, reads the CSV file,
 * and parses its rows into an array. The parsed rows and file path are added to the
 * request object for further processing in subsequent middleware or routes.
 *
 * @function parseSingleCSVFile
 * @param {Object} req - The Express request object, which should contain the uploaded file.
 * @param {Object} res - The Express response object used to send responses to the client.
 * @param {Function} next - The middleware function to call to pass control to the next middleware.
 *
 * @returns {void} This function does not return a value; it either calls `next()` or sends a response.
 * @throws {Error} Throws an error if the CSV file cannot be parsed or read.
 */
export const parseSingleCSVFile = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    const rows = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on("data", (row) => rows.push(row))
        .on("end", () => {
            req.rows = rows;
            req.filePath = filePath;
            next();
        })
        .on("error", (err) => {
            res.status(500).json({ message: "Error parsing CSV file", err });
        })
        .on("finish", () => {
            fs.unlinkSync(req.filePath);
        });
};

/**
 * Middleware function to parse multiple uploaded CSV files and extract their contents.
 *
 * This function checks for the presence of multiple files in the request, reads each CSV file,
 * parses its rows into an array, and adds the results to `req.fetchedResults`. Each parsed file's
 * data is stored with its filename in an array, allowing for subsequent processing in the next middleware.
 *
 * @function parseMultiCSVFiles
 * @param {Object} req - The Express request object, expected to contain multiple uploaded files.
 * @param {Object} res - The Express response object used to send responses to the client.
 * @param {Function} next - The middleware function to call to pass control to the next middleware.
 * 
 * @returns {void} This function does not return a value; it either calls `next()` or sends a response.
 * 
 * @throws {Error} Throws an error if any CSV file cannot be parsed or read.
 */
export const parseMultiCSVFiles = (req, res, next) => {
    const files = req.files;

    if (!files || files.length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    req.fetchedResults = [];

    files.forEach((file, _) => {
        const filePath = path.join(__dirname, file.path);
        const fileData = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on("data", (row) => {
                fileData.push(row);
            })
            .on("end", () => {
                req.fetchedResults.push({
                    fileName: file.originalname,
                    data: fileData,
                });
            })
            .on("error", () => {
                res.status(500).json({
                    message: "Error parsing CSV file",
                    err,
                });
            })
            .on("finish", () => {
                fs.unlinkSync(filePath);
            });
    });
};
