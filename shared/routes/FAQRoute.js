const express = require('express');
const FAQs = require('../controllers/FAQController');

const router = express.Router();

router.get('/all', FAQs.getAllFAQs);
router.post('/add', FAQs.addFAQs);
router.post('/update', FAQs.updateFAQs);
router.post('/remove', FAQs.deleteFAQs);

module.exports = router;