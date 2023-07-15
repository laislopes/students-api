import students from "../models/Student.js";

class StudentsController {

    static getAll = async(_, res) => {
        try {
            const result = await students.find();

            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    }; 

    static getById = async(req, res) => {
        try {
            const { id } = req.params;

            const student = await students.findById(id);
        
            if(student) res.status(200).send(student);
        } catch (error) {
            console.log(error);
        }
    }; 

    static add = async(req, res) => {
        try {
            let student = new students(req.body);

            await student.save();

            res.status(201).send(student.toJSON());
        } catch (error) {
            console.log(error);
        }
    };

    static update = async(req, res) => {
        try {
            const { id } = req.params;

            const studentResult = await students.findByIdAndUpdate(id, { $set: req.body });

            if(studentResult) res.status(200).send({message: `The book ${id} has been updated successfully!`});
        } catch (error) {
            console.log(error);
        }
    }; 

    static delete = async(req, res) => {
        try {
            const { id } = req.params;

            const studentResult = await students.findByIdAndDelete(id);

            if(studentResult) res.status(200).send({message: `The book ${id} has been deleted successfully!`});
        } catch (error) {
            console.log(error);
        }
    }; 

}

export default StudentsController;