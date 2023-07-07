import { type Message } from 'node-nats-streaming';
import {
  Subjects,
  Listener,
  type ProductUpdatedEvent,
  NotFoundError,
  QueueGroupNames
} from '@esgivroom/common';

import { Moto } from '../../models/moto';

export class ProductUpdatedListener extends Listener<ProductUpdatedEvent> {
  subject: Subjects.ProductUpdated = Subjects.ProductUpdated;
  queueGroupName = QueueGroupNames.ORDER_SERVICE;

  async onMessage (data: ProductUpdatedEvent['data'], msg: Message): Promise<void> {
    const {
      title,
      price,
      image,
      colors,
      sizes,
      countInStock,
      numReviews,
      rating,
      isReserved
    } = data;

    const product = await Moto.findByEvent(data);

    if (product == null) {
      throw new NotFoundError();
    }

    product.set({
      title,
      price,
      image,
      colors,
      sizes,
      countInStock,
      numReviews,
      rating,
      isReserved
    });

    // Save and update version
    await product.save();

    // Acknowledge the message and tell NATS server it successfully processed
    msg.ack();
  }
}
