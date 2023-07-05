import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@esgivroom/common'
const router = express.Router();
import { body } from 'express-validator';

router.post('/api/moto', requireAuth, [
  body('title').not().isEmpty().withMessage('Un titre est nécessaire'),
  body('price').isFloat({ gt: 0 }).withMessage('Le prix doit être supérieur à 0')
], validateRequest, (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createMotoRouter };