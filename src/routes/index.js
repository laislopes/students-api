import express from "express";
import students from "./studentsRoutes.js";

const routes = (app) => {

    app.route("/").get((_,res) => {
        res.status(200).send("Students API Version 1.0");
    });

    app.use(
        express.json(),
        students
    );
};


export default routes;