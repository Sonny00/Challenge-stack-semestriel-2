import express, { type Request, type Response } from 'express';
import { Moto } from '../models/moto';

const router = express.Router();

router.get('/api/orders/products', async (req: Request, res: Response) => {
  let products = await Moto.find({});

  if (products == null) {
    products = [];
  }

  res.status(200).send(products);
});

export { router as showProductRouter };
