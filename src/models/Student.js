import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String },
        email: { type: String }
    }
);

const students = mongoose.model("students", studentSchema);

export default students;