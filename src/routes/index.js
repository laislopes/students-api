import express from "express";

const routes = (app) => {

    app.route("/").get((_,res) => {
        res.status(200).send("Students API Version 1.0");
    });

    app.use(
        express.json()
    );
};


export default routes;