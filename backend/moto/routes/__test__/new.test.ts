import request from 'supertest';
import { app } from '../../src/app';

it("a un gestionnaire de route écoutant les requêtes POST sur '/api/moto'", async () => {
const response = await request(app).post('/api/moto').send({});

expect(response.status).not.toEqual(404);
});

it("ne peut être accessible que si l'utilisateur est connecté", async () => {
await request(app).post('/api/moto').send({}).expect(401);
});

it("renvoie une erreur si un titre invalide est fourni", async () => {});

it("renvoie une erreur si un prix invalide est fourni", async () => {});

it("crée un moto avec des entrées valides", async () => {});