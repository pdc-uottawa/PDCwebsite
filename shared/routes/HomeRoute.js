const express = require('express');
const homePageController = require('../controllers/homePageController');

const router = express.Router();

router.get('/carousel', homePageController.carouselData);
router.post('/carousel/add', homePageController.addCarouselData);
router.post('/carousel/update', homePageController.updateCarouselData);
router.post('/carousel/delete', homePageController.deleteCarouselData);
router.get('/about', homePageController.aboutUsData);
router.post('/about/update', homePageController.updateAboutUsData);
router.get('/testimonials', homePageController.testimonialData);
router.post('/testimonials/add', homePageController.addTestimonialData);
router.post('/testimonials/update', homePageController.updateTestimonialData);
router.post('/testimonials/delete', homePageController.deleteTestimonialData);
router.post('/contact', homePageController.contactUsData);
router.get('/queryexecutives', homePageController.queryexecutivesData);

module.exports = router;