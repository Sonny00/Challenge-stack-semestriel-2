import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { MotoCreatedListener } from './events/moto-created-listener';

console.clear();

const stan = nats.connect('Moto', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222/',
});

stan.on('connect', () => {
  console.log('Listener est connecté au NATS');

  stan.on('close', () => {
    console.log('la conexion est fermée');
    process.exit();
  });

  new MotoCreatedListener(stan).listen();
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());