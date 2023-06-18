const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "Setup required"],
        minlength: [1, "Setup must be at least one character long"]
    },
    punchLine: {
        type: String,
        required: [true, "PunchLine required"],
        maxlength: [9999, "PunchLine must be at least 1 character long"]
    }
}, { timestamps: true } );
const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;