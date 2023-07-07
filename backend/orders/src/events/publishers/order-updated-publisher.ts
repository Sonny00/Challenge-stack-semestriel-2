import { Publisher, type OrderUpdatedEvent, Subjects } from '@esgivroom/common';

export class OrderUpdatedPublisher extends Publisher<OrderUpdatedEvent> {
  subject: Subjects.OrderUpdated = Subjects.OrderUpdated;
}
