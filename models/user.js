const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId, //They don´t have metadeta
            ref: 'Event'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);