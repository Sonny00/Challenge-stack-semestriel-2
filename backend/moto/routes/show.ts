import express, { Request, Response } from 'express';
import { Moto } from '../src/models/moto';
import { NotFoundError } from '@esgivroom/common';

const router = express.Router();
router.get("/api/moto/:id", async (req: Request, res: Response) => {
    const moto = await Moto.findById(req.params.id);
    if(!moto){
        throw new NotFoundError();
    }
    res.send(moto);
});

export { router as showMotoRouter };
