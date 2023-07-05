import nats from 'node-nats-streaming';
import { MotoCreatedPublisher } from './events/moto-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new MotoCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: 'motopack',
      price: 200000,
    });
  } catch (err) {
    console.error(err);
  }

  
});