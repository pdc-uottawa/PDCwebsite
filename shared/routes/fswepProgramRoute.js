const express = require('express');
const fswepPrograms = require('../controllers/fswepProgramController');

const router = express.Router();

router.get('/all', fswepPrograms.getAllFswepPrograms);
router.post('/add', fswepPrograms.addFswepPrograms);
router.post('/update', fswepPrograms.updateFswepPrograms);
router.post('/remove', fswepPrograms.deleteFswepPrograms);

module.exports = router;