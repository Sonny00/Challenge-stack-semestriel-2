import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { Order, OrderStatus } from './order';

import type { MotoAttrs, MotoDoc, MotoModel } from '../types/moto';

const MotoSchema = new mongoose.Schema<MotoDoc, MotoModel>(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    userId: { type: String, required: true },
    image: {
      type: String,
      required: true
    },
    // colors: { type: String },
    // sizes: { type: String },
    countInStock: {
      type: Number,
      required: true,
      default: 1
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    isReserved: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    toJSON: {
      transform (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        // delete ret.__v;
      }
    },
    timestamps: true
  }
);

MotoSchema.set('versionKey', 'version');

// @ts-ignore
MotoSchema.plugin(updateIfCurrentPlugin);

MotoSchema.statics.findByEvent = (event: {
  id: string
  version: number
}) => {
  return Moto.findOne({
    _id: event.id,
    version: event.version - 1
  });
};

MotoSchema.statics.build = (attrs: MotoAttrs) => {
  return new Moto({
    _id: attrs.id,
    title: attrs.title,
    price: attrs.price,
    userId: attrs.userId,
    image: attrs.image,
    // colors: attrs.colors,
    // sizes: attrs.sizes,
    countInStock: attrs.countInStock,
    numReviews: attrs.numReviews,
    rating: attrs.rating,
    isReserved: attrs.isReserved
  });
};

const Moto = mongoose.model<MotoDoc, MotoModel>(
  'Moto',
  MotoSchema
);

export { Moto };