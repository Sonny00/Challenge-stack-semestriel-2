import mongoose from 'mongoose';


interface MotoAttrs { 
    title: string;
    price: number;
    userId: string;
} 


interface MotoDoc extends mongoose.Document {
    title: string;
    price: number;
    userId: string;
}

interface MotoModel extends mongoose.Model<MotoDoc> {
    build(attrs: MotoAttrs): MotoDoc;
}

const motoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id; 
        }
    }
});

motoSchema.statics.build = (attrs: MotoAttrs) => {
    return new Moto(attrs);
};

const Moto = mongoose.model<MotoDoc, MotoModel>('Moto', motoSchema);

export { Moto };

