const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FollowSchema = new Schema({
    followName: {
        type: String,
        required: true
    },
    followURL: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    follower: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = Follow = mongoose.model('follows', FollowSchema);