import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:Password123@node-express.nrlzuyg.mongodb.net/serverless?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;