import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Moto } from '../src/models/moto';
import { requireAuth } from '@esgivroom/common'
import { validateRequest } from  '@esgivroom/common'

const router = express.Router(); 

router.post('/api/moto', requireAuth, [
  body('title').not().isEmpty().withMessage('Un titre est nécessaire'),
  body('price').isFloat({ gt: 0 }).withMessage('Le prix doit être supérieur à 0')
], validateRequest, async (req: Request, res: Response) => {
  const { title, price } = req.body;

    const moto = Moto.build({
      title,
      price,
      userId: req.currentUser!.id,
    });
    
  await moto.save();

    res.status(201).send(moto);
  }
);

export { router as createMotoRouter };