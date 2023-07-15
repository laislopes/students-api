import mongoose from "mongoose";
import { BaseError, InvalidRequest, ValidationError } from "../errors/index.js";

// eslint-disable-next-line no-unused-vars
function errorsManager(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError){
    new InvalidRequest().sendReply(res);
  }else if(error instanceof mongoose.Error.ValidationError){
    new ValidationError(error).sendReply(res);
  }else if(error instanceof BaseError){
    error.sendReply(res);
  }
  else{
    new BaseError().sendReply(res);
  }
}

export default errorsManager;