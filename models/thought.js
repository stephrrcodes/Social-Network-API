const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: 'Username is Required',
        maxLength: 280 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        unique: true,
        required: 'Username is Required',
    },
    reactions: {
        type: Schema.Types.ObjectId,
        ref: User
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
