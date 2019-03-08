import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

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

userSchema.plugin(uniqueValidator, { message: '{PATH} should be unique' });

userSchema.methods.toJSON = function () {
    
    const userObj = this.toObject();
    delete userObj.password;

    return userObj
}

export default model('User', userSchema )