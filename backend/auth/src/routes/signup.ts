import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
// import { DatabaseConnectionError } from "../errors/database-connection-errors";
import { User } from "../models/user";

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
  ],
 async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
   
   const { email, password } = req.body;
   const existingUser = await User.findOne({ email });
   
   if (existingUser) {
     console.log("L'email est déjà utilisé");
     return res.send({});
   }
  
     const user = User.build({ email, password });
     await user.save();

     res.status(201).send(user);
  }
); 

export { router as signupUserRouter };
