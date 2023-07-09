import request from 'supertest'
import { app } from '../../src/app'

it('retourne 404 si le moto n\'est pas trouvé', async () => {
    await request(app)
        .get('/api/moto/5f9f4b3d9d5f3d2f4c9d9d9d')
        .send()
        .expect(404)
})

it('retourne la moto si le moto est trouvé', async () => {
    const title = 'test';
    const price = 20;
    
    const response = await request(app)
        .post('/api/moto')
        .set('Cookie', global.signin())
        .send({
            title: 'test',
            price: 20
        })
        .expect(201)
    
    const motoResponse = await request(app)
        .get(`/api/moto/${response.body.id}`)
        .send()
        .expect(200)
    
    expect(motoResponse.body.title).toEqual(title);
    expect(motoResponse.body.price).toEqual(price);

    
});
