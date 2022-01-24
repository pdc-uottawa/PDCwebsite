const express = require('express');
const volunteersController = require('../controllers/volunteersController');

const router = express.Router();

router.get('/all', volunteersController.getAllVolunteers);
router.post('/add', volunteersController.addVolunteers);
router.post('/update', volunteersController.updateVolunteer);

module.exports = router;