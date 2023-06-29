import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500
    reason = " Erreur lors de la connexion à la base de données";

    constructor() {
        super('Erreur lors de la connexion à la base de données');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
      return  [{ message: this.reason }];
    }
}