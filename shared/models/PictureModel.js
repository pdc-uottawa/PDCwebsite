const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const pictureSchema = new Schema({
    imageData: {type:String},
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Picture = mongoose.model('Pictures', pictureSchema);

module.exports =  Picture;