const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReadLaterSchema = new Schema({

    readLaterURL: {
        type: String,
        required: true
    },
    readLaterDescription: {
        type: String,
        required: true
    },
    readLaterName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    reader: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = ReadLater = mongoose.model('readlaters', ReadLaterSchema);