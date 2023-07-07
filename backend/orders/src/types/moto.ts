import type mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new Moto
export interface MotoAttrs {
  id: string
  title: string
  price: number
  userId: string
  image: string
  // colors?: string
  // sizes?: string
  countInStock: number
  numReviews: number
  rating: number
  isReserved: boolean
  // isReserved(): Promise<boolean>;
}

// An interface that describes the properties
// that a Moto Document has
export interface MotoDoc extends mongoose.Document {
  title: string
  price: number
  userId: string
  image: string
  // colors?: string
  // sizes?: string
  countInStock: number
  numReviews: number
  rating: number
  isReserved: boolean
  version: number
  createdAt: string
  updatedAt: string
}

// An interface that describes the properties
// that a Moto Model has
export interface MotoModel extends mongoose.Model<MotoDoc> {
  build: (attrs: MotoAttrs) => MotoDoc
  findByEvent: (event: {
    id: string
    version: number
  }) => Promise<MotoDoc | null>
}