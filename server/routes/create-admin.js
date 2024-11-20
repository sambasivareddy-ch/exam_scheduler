import express from 'express';
import bcrypt from 'bcryptjs';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { insertIntoAdminTable } from '../models/admin.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // console.log(adminEmailAddress, adminPassword);

    const hashedPassword = await bcrypt.hash(password, 10);

    await insertIntoAdminTable(email, hashedPassword).then((queryResult) => {
        res.status(StatusCodes.CREATED).json({
            request_status: StatusCodes.CREATED,
            message: `Admin Successfully Created`,
        })
    }).catch((err) => {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            request_status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: "Error occurred while creating Admin",
        })
    })
})

export default router;