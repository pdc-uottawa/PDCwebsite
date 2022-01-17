const express = require('express');
const CDCController = require('../controllers/cdcController');

const router = express.Router();

router.get('/links/all', CDCController.getAllLinks);
router.post('/links/update', CDCController.updateLinks);
router.get('/resumetips/all', CDCController.getAllResumeTips);
router.post('/resumetips/add', CDCController.addResumeTips);
router.post('/resumetips/update', CDCController.updateResumeTips);
router.get('/linkedintips/all', CDCController.getAllLinkedInTips);
router.post('/linkedintips/add', CDCController.addLinkedInTips);
router.post('/linkedintips/update', CDCController.updateLinkedInTips);
router.get('/interviewques/all', CDCController.getAllInterviewQuestions);
router.post('/interviewques/add', CDCController.addInterviewQuestions);
router.post('/interviewques/update', CDCController.updateInterviewQuestions);
router.get('/contact/all', CDCController.getAllContactInformation);
router.post('/contact/add', CDCController.addContactInformation);
router.post('/contact/update', CDCController.updateContactInformation);

module.exports = router;