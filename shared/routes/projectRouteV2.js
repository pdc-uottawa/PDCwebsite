const express = require('express');
const Projects = require('../controllers/projectController');

const router = express.Router();

router.get('/all', Projects.getAllProjects);
router.post('/user', Projects.getProjectsByUser)
router.post('/one', Projects.getOneProject);
router.post('/create', Projects.addProject);
router.post('/update', Projects.updateProject);
router.post('/delete', Projects.deleteProject);

module.exports = router;