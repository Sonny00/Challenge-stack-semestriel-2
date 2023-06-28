import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-errors";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("L'Email doit être valide"),
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
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupUserRouter };
