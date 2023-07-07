import { Publisher, OrderCreatedEvent, Subjects } from "@esgivroom/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
