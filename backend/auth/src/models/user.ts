import moongose from 'mongoose';
import { Password } from '../services/password';

interface UserAttrs {
    email: string;
    password: string;
}

interface UserModel extends moongose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends moongose.Document {
    email: string;
    password: string;
}

const userSchema = new moongose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
            done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};


const User = moongose.model<UserDoc, UserModel>('User', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
};

export { User, buildUser };
    