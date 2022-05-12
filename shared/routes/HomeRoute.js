const express = require('express');
const homePageController = require('../controllers/homePageController');

const router = express.Router();

router.get('/carousel', homePageController.carouselData);
router.get('/about', homePageController.aboutUsData);
router.get('/testimonials', homePageController.testimonialData);
router.post('/contact', homePageController.contactUsData);
router.get('/queryexecutives', homePageController.queryexecutivesData);

module.exports = router;