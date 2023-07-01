import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-requests';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { Password } from '../services/password';

const router = express.Router();

router.post(
    "/api/users/signin", 
    [
        body('email').isEmail().withMessage("L'Email doit être valide"),
        body('password')
            .trim()
            .notEmpty()
            .withMessage("Le mot de passe doit être renseigné"),
    ],
    validateRequest,
  async (req: Request, res: Response) => {
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
          throw new BadRequestError("Identifiants invalides");
      }

      const passwordsMatch = await Password.compare(existingUser.password, password); 
      if (!passwordsMatch) {
          throw new BadRequestError("Identifiants invalidess");
      }
      
      // Génération du JWT
      const userJwt = jwt.sign(
          {
              id: existingUser.id,
              email: existingUser.email,
          },
          process.env.JWT_KEY!
      );

      req.session = {
          jwt: userJwt,
      }; 
      
      res.status(200).send(existingUser);
    }
); 

export { router as signinUserRouter }; 