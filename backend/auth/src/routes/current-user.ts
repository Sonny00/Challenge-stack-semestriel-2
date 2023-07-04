import express from 'express';
import jwt from 'jsonwebtoken';
// import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '@esgivroom/common'

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };