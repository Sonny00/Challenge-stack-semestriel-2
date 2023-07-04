import express, { Request, Response } from 'express';
import { requireAuth } from '@esgivroom/common'
const router = express.Router();

router.post('/api/moto', requireAuth, (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createMotoRouter };