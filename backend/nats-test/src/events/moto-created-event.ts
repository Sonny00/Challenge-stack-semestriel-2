import { Subjects } from './subjects';

export interface MotoCreatedEvent {
  subject: Subjects.MotoCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
