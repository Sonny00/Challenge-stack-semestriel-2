import express, { type Request, type Response } from 'express';
import { param } from 'express-validator';
import { NotFoundError, validateRequest } from '@esgivroom/common';

import { User } from '../models/user';

const router = express.Router();

router.delete(
  '/api/users/:userId',
  [param('userId').isMongoId().withMessage('Invalid MongoDB ObjectId')],
  validateRequest,
  async (req: Request, res: Response) => {
    // const deletedUser = await User.findById(req.params.userId);

    // // Check if the user is existing
    // if (deletedUser == null) {
    //   throw new NotFoundError();
    // }

    // await deletedUser.deleteOne();

    // res.status(200).send({});
    User.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).send({});
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
);

export { router as deleteUserRouter };
