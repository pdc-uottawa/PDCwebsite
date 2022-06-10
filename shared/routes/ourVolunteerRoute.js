const express = require('express');
const ourVolunteerController = require('../controllers/ourVolunteerController');

const router = express.Router();

router.get('/all', ourVolunteerController.getAllOurVolunteer);
router.post('/add', ourVolunteerController.addOurVolunteer);
router.post('/update', ourVolunteerController.updateOurVolunteer);
router.post('/remove', ourVolunteerController.deleteOurVolunteer);

module.exports = router;