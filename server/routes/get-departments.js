import express from 'express';

import { pg_client } from '../config/connection.js';

const router = express.Router();

router.get('/', (req, res) => {
    pg_client.query('SELECT * FROM DEPARTMENTS').then((result) => {
        return res.status(200).json({
            message: "Fetched Department details successfully",
            data: result.rows
        })
    }).catch((err) => {
        return res.status(500).json({
            message: "Unable to fetch the department details",
        })
    })
})

export default router;