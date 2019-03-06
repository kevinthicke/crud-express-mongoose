import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String
    }, 
    email: {
        type: String,
        unique: true,
        required: [ true, 'email is required']
    },
    password: {
        type: String,
        required: true
    }, 
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: {
            values: ['USER_ROLE', 'ADMIN_ROLE'],
            message: '{VALUE} not valid'
        }
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

export default model('user', userSchema )