import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
// import { DatabaseConnectionError } from "../errors/database-connection-errors";
import { User } from "../models/user";

import type { UserAttrs } from '../types/user';
import { validateRequest, BadRequestError } from "@esgivroom/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("L'Email doit être valide"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage( "Le mot de passe doit être compris entre 4 et 20 caractères"),
    body('name').not().isEmpty().withMessage('Le surnom est requis'),
    body('gender').not().isEmpty().withMessage('Le genre est requis'),
    body('age').isInt({ gt: 0 }).not().isEmpty().withMessage('L\'âge est requis')
  ], validateRequest,
 async (req: Request, res: Response) => {
   const { 
    email,
    password,
    isAdmin,
    name,
    gender,
    age,
    bio,
    shippingAddress 
   }: UserAttrs = req.body;

   let { image }: UserAttrs = req.body;

   const existingUser = await User.findOne({ email });
   
   
   if (existingUser) {
     throw new BadRequestError("L'email est déjà utilisé");
   }

   // Assign random generated image from API
   if (image == null) {
    image = `https://avatars.dicebear.com/api/micah/${name.trim()}${email.trim()}.svg?b=%23f0f0f0`;
  }
  
    const user = User.build({
      email,
      password,
      isAdmin,
      name,
      image,
      gender,
      age,
      bio,
      shippingAddress
    });
    await user.save();

   const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin,
      name,
      image,
      gender,
      age,
      bio,
      shippingAddress
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
