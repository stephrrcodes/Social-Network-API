const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: 'Username is Required',
        trim: true,
    },
    email: {
        type: String,
        required: 'Email is Required',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: thoughts
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: User
    }
});

const User = model('User', UserSchema);
  
module.exports = User;