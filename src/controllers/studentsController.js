class StudentsController {

    static getAll = async(req, res, next) => {
        try {
            
            next();
        } catch (error) {
            next(error)
        }
    }; 
}

export default StudentsController;