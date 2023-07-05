import { Publisher } from './base-publisher';
import { MotoCreatedEvent } from './moto-created-event';
import { Subjects } from './subjects';

export class MotoCreatedPublisher extends Publisher<MotoCreatedEvent> {
  subject: Subjects.MotoCreated = Subjects.MotoCreated;
}
