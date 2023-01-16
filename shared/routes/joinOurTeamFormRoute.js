const express = require('express');
const joinOurTeamFormController = require('../controllers/joinOurTeamFormController');

const router = express.Router();

router.get('/link', joinOurTeamFormController.getFormLink);
router.post('/link/update', joinOurTeamFormController.updateJoinTeamLink);
router.get('/feedbackLink',joinOurTeamFormController.getFeedbackFormLink);
router.post('/feedbackLink/update',joinOurTeamFormController.updateFeedbackFormLink);

module.exports = router;