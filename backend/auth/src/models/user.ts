import moongose from 'mongoose';

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

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};


const User = moongose.model<UserDoc, UserModel>('User', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
};

export { User, buildUser };
    