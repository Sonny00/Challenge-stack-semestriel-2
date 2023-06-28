import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends CustomError {
    reason = " Erreur lors de la connexion à la base de données";
    statusCode = 500
    
    constructor() {
        super('Erreur lors de la connexion à la base de données');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }


    serializeErrors() {
        return [
            { message: this.reason, },
        ];
    }
}