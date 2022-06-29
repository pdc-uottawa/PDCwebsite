const express = require('express');
const studentAssociationController = require('../controllers/studentAssociationController');

const router = express.Router();

router.get('/all', studentAssociationController.getAllstudentAssociation);
router.post('/add', studentAssociationController.addstudentAssociation);
router.post('/update', studentAssociationController.updatestudentAssociation);
router.post('/remove', studentAssociationController.deletestudentAssociation);

module.exports = router;