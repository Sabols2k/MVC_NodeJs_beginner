const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: 'String', required: true},
    description: {type: 'String', maxLength: 600},
    image: {type: 'String', maxLength: 255},
    videoId: {type: 'String', maxLength: 255},
    level: {type: 'String', maxLength: 255},
},{
    timestamp: true,
});

module.exports = mongoose.model('Course',Course);
