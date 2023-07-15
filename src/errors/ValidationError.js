import InvalidRequest from "./BadRequestError.js";

class ValidationError extends InvalidRequest{
  constructor(error){
    const errorMessages = Object.values(error.errors)
      .map(error => error.message)
      .join("; ");
    
    super(`The follow errors were found: ${errorMessages}`);
  }
}

export default ValidationError;