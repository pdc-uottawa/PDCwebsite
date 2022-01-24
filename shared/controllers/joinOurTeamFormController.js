const mongoose = require('mongoose');
const joinOurTeamForm = require('../models/joinOurTeamFormModel');

const getFormLink = async (req, res, next) => {
    const formLink = await joinOurTeamForm.find().exec();
    res.json(formLink);
}

exports.getFormLink = getFormLink;