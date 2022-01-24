const express = require('express');
const ourTeamController = require('../controllers/ourTeamController');

const router = express.Router();

router.get('/all', ourTeamController.getOurTeam);
router.post('/add', ourTeamController.addOurTeam);
router.post('/update', ourTeamController.updateOurTeam);
router.post('/remove', ourTeamController.deleteOurTeam);

module.exports = router;