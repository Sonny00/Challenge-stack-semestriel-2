import moongose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { Password } from '../services/password';
import type { UserAttrs, UserDoc, UserModel } from '../types/user';

// interface UserAttrs {
//     email: string;
//     password: string;
//     isAdmin: boolean;
// }

// interface UserModel extends moongose.Model<UserDoc> {
//     build(attrs: UserAttrs): UserDoc;
// }

// interface UserDoc extends moongose.Document {
//     email: string;
//     password: string;
//     isAdmin: boolean;
// }

const userSchema = new moongose.Schema(
    {
        email: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
        isAdmin: {
          type: Boolean,
          required: true,
          default: false
        },
        name: {
          type: String,
          required: true
        },
        image: {
          type: String
        },
        gender: {
          type: String,
          required: true
        },
        age: {
          type: Number,
          required: true
        },
        bio: {
          type: String
        },
        shippingAddress: {
          address: { type: String },
          city: { type: String },
          postalCode: { type: String },
          country: { type: String }
        }
      },
    {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        },
    },
  }
);

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

export { User };
    