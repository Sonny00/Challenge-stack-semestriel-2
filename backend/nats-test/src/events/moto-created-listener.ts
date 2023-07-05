import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { MotoCreatedEvent } from './moto-created-event';
import { Subjects } from './subjects';

export class MotoCreatedListener extends Listener<MotoCreatedEvent> {
  readonly subject = Subjects.MotoCreated;
  queueGroupName = 'payments-service';

  onMessage(data: MotoCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
