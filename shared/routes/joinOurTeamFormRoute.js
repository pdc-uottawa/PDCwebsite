const express = require('express');
const joinOurTeamFormController = require('../controllers/joinOurTeamFormController');

const router = express.Router();

router.get('/link', joinOurTeamFormController.getFormLink);

module.exports = router;