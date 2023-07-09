import { CustomError } from './custom-errors';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("La route n'a pas été trouvée");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: " Rien n'a été trouvée mon ami " }];
  }
}