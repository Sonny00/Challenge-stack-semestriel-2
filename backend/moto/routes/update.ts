import express ,{ Request, Response } from 'express';
import { body } from 'express-validator';
import {
    requireAuth,
    validateRequest,
    NotFoundError,
    NotAuthorizedError,
} from '@esgivroom/common';
import { Moto } from '../src/models/moto';

const router = express.Router(); 

router.put('/api/moto/:id', requireAuth, [body('title').not().isEmpty().withMessage('Un titre est nécessaire'),body('price').isFloat({ gt: 0 }).withMessage('Le prix doit être supérieur à 0')
], validateRequest, async (req: Request, res: Response) => {
    const moto = await Moto.findById(req.params.id);
    if(!moto){
        throw new NotFoundError();
    }

    if (moto.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
    }

    moto.set({
        title: req.body.title,
        price: req.body.price,
        
    });
    await moto.save();


    res.send(moto);
}
);

export { router as updateMotoRouter };

