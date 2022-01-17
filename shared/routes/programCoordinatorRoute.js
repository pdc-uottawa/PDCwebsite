const express = require('express');
const coordinatorController = require('../controllers/coordinatorController');

const router = express.Router();

router.get('/all', coordinatorController.getAllCoordinators);
router.post('/add', coordinatorController.addCoordinators);
router.post('/update', coordinatorController.updateCoordinator);
router.post('/remove', coordinatorController.deleteCoordinator);

module.exports = router;