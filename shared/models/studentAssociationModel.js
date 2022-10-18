const mongoose = require('mongoose');

const studentAssociationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true},
    link: {type: String, required: false},
    lang: {type: String, required: true}
});

const studentAssociation = mongoose.model('studentassociations', studentAssociationSchema);

module.exports= studentAssociation