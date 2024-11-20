import express from 'express';

import { csvMultiFilesUpload, parseMultiCSVFiles } from '../middleware/csvFileUploadMiddleware.js';

const router = express.Router();

router.post('/', csvMultiFilesUpload, parseMultiCSVFiles, (req, res) => {
    
})

export default router;