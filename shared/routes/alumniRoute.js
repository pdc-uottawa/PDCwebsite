const express = require('express');
const alumniController = require('../controllers/alumniController');

const router = express.Router();

router.get('/all', alumniController.getAllAlumni);
router.post('/add', alumniController.addAlumni);
router.post('/update', alumniController.updateAlumni);
router.post('/remove', alumniController.deleteAlumni);

module.exports = router;