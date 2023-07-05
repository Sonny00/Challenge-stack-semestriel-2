import express, { Request, Response } from 'express';
import { Moto } from '../src/models/moto';

const router = express.Router();

router.get('/api/moto', async (req: Request, res: Response) => {
    const moto = await Moto.find({});
    res.send(moto);
}
);

export { router as indexMotoRouter };

