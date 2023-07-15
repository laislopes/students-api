import students from "../models/Student.js";
import NotFoundError from "../errors/NotFoundError.js";

class StudentsController {

    static getAll = async(_, res, next) => {
        try {
            const result = await students.find();

            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }; 

    static getById = async(req, res, next) => {
        try {
            const { id } = req.params;

            const student = await students.findById(id);
        
            if(student) res.status(200).send(student);

            next(new NotFoundError(`Book ${id} was not found`));
        } catch (error) {
            next(error);
        }
    }; 

    static add = async(req, res, next) => {
        try {
            let student = new students(req.body);

            await student.save();

            res.status(201).send(student.toJSON());
        } catch (error) {
            next(error);
        }
    };

    static update = async(req, res, next) => {
        try {
            const { id } = req.params;

            const studentResult = await students.findByIdAndUpdate(id, { $set: req.body });

            if(studentResult) res.status(200).send({message: `The book ${id} has been updated successfully!`});

            next(new NotFoundError(`Book ${id} was not found`));
        } catch (error) {
            next(error);
        }
    }; 

    static delete = async(req, res, next) => {
        try {
            const { id } = req.params;

            const studentResult = await students.findByIdAndDelete(id);

            if(studentResult) res.status(200).send({message: `The book ${id} has been deleted successfully!`});

            next(new NotFoundError(`Book ${id} was not found`));
        } catch (error) {
            next(error);
        }
    }; 

}

export default StudentsController;