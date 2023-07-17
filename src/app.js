import express from "express";
import db from "./config/dbConnect.js";
import cors from "cors";
import errorsManager from "./middlewares/errorsManager.js";
import notFoundManager from "./middlewares/notFoundManager.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Database connection has been made successfully");
});

const app = express();
app.use(cors());

routes(app);

app.use(notFoundManager);

app.use(errorsManager);


export default app;