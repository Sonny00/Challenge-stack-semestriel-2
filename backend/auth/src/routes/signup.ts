import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
// import { DatabaseConnectionError } from "../errors/database-connection-errors";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@esgivroom/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail()
      .withMessage("L'Email doit être valide"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage( "Le mot de passe doit être compris entre 4 et 20 caractères"),
  ], validateRequest,
 async (req: Request, res: Response) => {
   const { email, password } = req.body;
   const existingUser = await User.findOne({ email });
   
   
   if (existingUser) {
     throw new BadRequestError("L'email est déjà utilisé");
 
   }
  
     const user = User.build({ email, password });
     await user.save();

   const userJwt = jwt.sign(
    {
     id: user.id,
      email: user.email,
     },
     process.env.JWT_KEY!
   );

   req.session = {
     jwt: userJwt
   };

     res.status(201).send(user);
  }
); 

export { router as signupUserRouter };
