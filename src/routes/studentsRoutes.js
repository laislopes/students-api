import express from "express";
import StudentsController from "../controllers/studentsController.js";

const router = express.Router();

router
  .get("/students", StudentsController.getAll)
  .get("/students/:id", StudentsController.getById)
  .post("/students", StudentsController.add)
  .put("/students/:id", StudentsController.update)
  .delete("/students/:id", StudentsController.delete);

export default router;